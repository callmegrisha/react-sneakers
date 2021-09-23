import React from 'react';
import axios from 'axios';

import Info from '../Info';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://613a4e511fcce10017e78e42.mockapi.io/order',
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      // это костыль, т.к. в мокапи нет риплейса и нужно удалять каждый пост отдельно
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          'https://613a4e511fcce10017e78e42.mockapi.io/cart/' + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert('Не удалось создать заказ');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            className="cu-p"
            src="img/btn-remove.svg"
            alt="Close"
            onClick={onClose}
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((obj) => (
                <article
                  className="cartItem d-flex align-center mb-20"
                  key={obj.id}
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imgUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <span className="mb-5">{obj.title}</span>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    className="removeBtn"
                    src="img/btn-remove.svg"
                    alt="Remove"
                    onClick={() => onRemove(obj.id)}
                  />
                </article>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} руб.</b>
                </li>
              </ul>
              <button
                className="greenButton"
                type="button"
                disabled={isLoading}
                onClick={onClickOrder}
              >
                Оформить заказ{' '}
                <img src="img/arrow-right.svg" alt="Arrow Right" />
              </button>
            </div>
          </>
        ) : (
          <Info
            image={
              isOrderComplete ? 'img/completed-order.png' : 'img/empty-cart.png'
            }
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
