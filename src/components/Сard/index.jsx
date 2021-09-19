import React from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';

import styles from './Card.module.scss';

function Card({
  id,
  onFavorite,
  imgUrl,
  title,
  price,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  console.log(title, isItemAdded(id));

  const onClickPlus = () => {
    onPlus({ id, imgUrl, title, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, imgUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <article className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={188}
          viewBox="0 0 150 188"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          // {...props}
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="389" y="73" rx="0" ry="0" width="0" height="1" />
          <rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
          <rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className="favorite" onClick={onClickFavorite}>
            <img
              src={
                isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'
              }
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
              src={
                isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'
              }
              alt="Plus"
              aria-label="Add sneaker"
              onClick={onClickPlus}
            />
          </div>
        </>
      )}
    </article>
    // <article className={styles.card}>
    //   <ContentLoader
    //     speed={2}
    //     width={150}
    //     height={188}
    //     viewBox="0 0 150 188"
    //     backgroundColor="#f3f3f3"
    //     foregroundColor="#ecebeb"
    //     // {...props}
    //   >
    //     <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
    //     <rect x="389" y="73" rx="0" ry="0" width="0" height="1" />
    //     <rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
    //     <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
    //     <rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
    //     <rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
    //   </ContentLoader>
    // </article>
  );
}

export default Card;
