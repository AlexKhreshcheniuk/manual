import './article.scss';
import image from '../../assets/images/image-2.png';

export const Article2 = () => {
  return (
    <div className="article article_2">
      <div className="article__image-container">
        <img className="article__image" src={image} alt="article-image-2" />
      </div>
      <div className="article__content" data-article-number="02">
        <div className="article__discription">Erectile dysfunction</div>
        <div className="article__title">Erections can be a tricky thing. But no need to feel down!</div>
        <div className="article__text">We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</div>
      </div>
    </div>
  );
}
