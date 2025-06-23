import type { FC } from 'react';
import './title.scss';

type TitleProps = {
  takeQuiz: () => void;
};

export const Title: FC<TitleProps> = ({ takeQuiz }) => {
  return (
    <div className="title">
      <div className="title__content">
        <h1 className="title__h1">Be good to yourself</h1>
        <div className="title__text">
          We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
        </div>
        <div className="title__button" onClick={takeQuiz}>
          Take the quiz
        </div>
      </div>
    </div>
  );
};
