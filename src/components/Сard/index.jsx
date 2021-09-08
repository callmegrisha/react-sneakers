import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
  const onClickButton = () => {
    alert(props.title);
  };

  return (
    <article className={styles.card}>
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unlicked" />
      </div>
      <img width={133} height={112} src={props.imgUrl} alt="Sneakers" />
      <h3>{props.title}</h3>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button" onClick={onClickButton}>
          <img
            width={11}
            height={11}
            src="/img/plus.svg"
            alt="Plus"
            aria-label="Add sneaker"
          />
        </button>
      </div>
    </article>
  );
}

export default Card;
