import React from "react";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
// import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { favoriteSliceUiActions } from "../../../store/shopping-cart/favoriteUISlice";

import "../../../styles/favoriteHeaderUI.css";

const FavoriteHeaderUI = () => {

  const dispatch = useDispatch();
  const favroiteProducts = useSelector((state) => state.product.favoriteItems);
  const totalAmount = useSelector((state) => state.product.favoriteTotalAmount);

  const toggleCart = () => {
    dispatch(favoriteSliceUiActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          <h6 className="text-center mt-5">No item added to the cart</h6>
          {/* {favroiteProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            favroiteProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )} */}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>₹{totalAmount}</span>
          </h6>
          <button>
            <Link to="/checkout" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default FavoriteHeaderUI;
