import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";

import { useSelector } from "react-redux";
import FavoriteHeaderUI from "../UI/favorite-section/FavoriteHeaderUI.jsx";

const Layout = () => {

  const showPage = useSelector((state) => state.favoriteUi.favoriteIsVisible);
  return (
    <div>
      <Header />

      {showPage && <FavoriteHeaderUI />}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
