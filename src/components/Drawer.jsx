const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between">
          Корзина
          <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        <div className="items">
          <article className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <span className="mb-5">Мужские Кроссовки Nike Air Max 270</span>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </article>

          <article className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <span className="mb-5">Мужские Кроссовки Nike Air Max 270</span>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </article>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton" type="button">
            Оформить заказ <img src="/img/arrow-right.svg" alt="Arrow Right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
