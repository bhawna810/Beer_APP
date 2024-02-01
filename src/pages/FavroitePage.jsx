import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Cover from "../components/Cover/Cover";
import "../styles/favroitePage.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";
import { favoriteActions } from "../store/favorite-page/favoriteSlice";

const FavroitePage = () => {

  const favroiteProducts = useSelector((state) => state.favorite.favoriteItems);
  const totalAmount = useSelector((state) => state.favorite.favoriteTotalAmount);

  // console.log(favroiteProducts);

  return (
    <Cover title="Favroite">
      <CommonSection title="Your Favroite Beer" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {favroiteProducts.length === 0 ? (
                <h5 className="text-center">You have not added anything in your Favorite page</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {favroiteProducts.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/beers">Continue to ADD</Link>
                  </button>
                
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Cover>
  );
};

const Tr = (props) => {
 
  const { id, name, image_url, price, quantity } = props.item;

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(favoriteActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image_url} alt="" />
      </td>
      <td className="text-center">{name}</td>
      <td className="text-center">₹{price}</td>
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default FavroitePage;
