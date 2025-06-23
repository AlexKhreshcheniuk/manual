import { useEffect, useState } from "react";
import type { QuizData } from "@/types/quiz";
import useIsMounted from "./useIsMounted";

const useQuizData = (startQuiz: boolean) => {
    const [quizData, setQuizData] = useState<QuizData | null>(null);
    const [quizLoading, setQuizLoading] = useState(false);
    const isMounted = useIsMounted();

    useEffect(() => {
        if (!startQuiz) return;
        
        const fetchQuizData = async () => {
            setQuizLoading(true);
            try {
                const res = await fetch("https://cdn.jsdelivr.net/gh/alexkhreshcheniuk/manual-quiz-data@main/quiz.json");
                const data = await res.json();
                if (isMounted.current) setQuizData(data);
            } finally {
                if (isMounted.current) setQuizLoading(false);
            }
        };
        fetchQuizData();
    }, [startQuiz]);

    return { quizData, quizLoading };
};

export default useQuizData;
