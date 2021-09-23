import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-45">
      <Link to="">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <span>Магазин лучших кроссовок</span>
          </div>
        </div>
      </Link>
      <ul className="headerRight d-flex align-center">
        <li
          className="mr-30 d-flex align-center cu-p"
          onClick={props.onClickCart}
        >
          <img src="img/cart.svg" alt="Корзина" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-30">
          <Link to="favorites">
            <img width={18} height={18} src="img/favorite.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="orders">
            <img src="img/user.svg" alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
