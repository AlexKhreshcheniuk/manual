import { useState } from "react";

import useQuizData from "@/hooks/useQuizData";

import { Header } from "@/components/header/header.component";
import { Title } from "@/components/title/title.component";
import { Article1 } from "@/components/articles/article-1.component";
import { Article2 } from "@/components/articles/article-2.component";
import { Footer } from "@/components/footer/footer.component";
import { Quiz } from "@/components/quiz/Quiz";

import "@/app.scss";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const { quizData, quizLoading } = useQuizData(startQuiz);

  return (
    <main>
      {!startQuiz && !quizLoading && (
        <div className="app">
          <div className="app__header app__container">
            <Header />
          </div>
          <div className="app__title">
            <div className="app__container">
              <Title takeQuiz={() => setStartQuiz(true)} />
            </div>
          </div>
          <div className="app__article">
            <div className="app__container">
              <h3 className="app__h3">What we can help with</h3>
            </div>
            <div className="app__container">
              <Article1 />
            </div>
          </div>
          <div className="app__article">
            <div className="app__container">
              <Article2 />
            </div>
          </div>
          <div className="app__footer">
            <div className="app__container">
              <Footer />
            </div>
          </div>
        </div>
      )}
      {startQuiz && !!quizData && !quizLoading && (
        <Quiz data={quizData} setStartQuiz={setStartQuiz} />
      )}
      {quizLoading && (
        <div className="quiz">
          <div className="flex items-center justify-center min-h-screen text-2xl">
            <p>Loading...</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
