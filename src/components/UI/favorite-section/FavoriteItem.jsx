import React from "react";
import { ListGroupItem } from "reactstrap";

import "../../../styles/favorite-item.css";

import { useDispatch } from "react-redux";

import { favoriteActions } from "../../../store/favorite-page/favoriteSlice";

const FavoriteItem = ({ item }) => {
  const { id, name, ibu, image_url, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      favoriteActions.addItem({
        id,
        name,
        image_url,
        ibu,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(favoriteActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(favoriteActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image_url} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{name}</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>₹{totalPrice}</span>
            </p>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn" onClick={deleteItem}>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default FavoriteItem;
