import React from 'react';
import styles from './Card.module.scss';

function Card({
  id,
  onFavorite,
  imgUrl,
  title,
  price,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, imgUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, imgUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <article className={styles.card}>
      <div className="favorite" onClick={onClickFavorite}>
        <img
          src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
          alt="Unlicked"
        />
      </div>
      <img width={133} height={112} src={imgUrl} alt="Sneakers" />
      <h3>{title}</h3>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
          aria-label="Add sneaker"
          onClick={onClickPlus}
        />
      </div>
    </article>
  );
}

export default Card;
