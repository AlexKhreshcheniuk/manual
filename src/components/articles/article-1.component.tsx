import './article.scss';
import image from '../../assets/images/image-1.png';
export const Article1 = () => {
  return (
    <div className="article article_1">
      <div className="article__image-container">
        <img className="article__image" src={image} alt="article-image-1" />
      </div>
      <div className="article__content" data-article-number="01">
        <div className="article__discription">Hair loss</div>
        <div className="article__title">Hair loss needn’t be irreversible. We can help!</div>
        <div className="article__text">We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</div>
      </div>
    </div>
  );
}
