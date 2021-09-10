import React from 'react';
import styles from './Card.module.scss';

function Card({ onFavorite, imgUrl, title, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ imgUrl, title, price });
    setIsAdded(!isAdded);
  };

  return (
    <article className={styles.card}>
      <div className="favorite" onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unlicked" />
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
