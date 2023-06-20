import React from "react";
import Info from "./components/info/info";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Cover from "./components/cover/cover";
import Title from "./components/title/title";
import Cards from "./components/card/cards";
import Catalogs from "./components/catalog/catalogs";
import TitleText from "./components/title/titleText";
import Group from "./components/group/groups";
import Construct from "./components/construct/construct";
import Services from "./components/services/services";
import Desk from "./components/desk/desk";
import Categories from "./components/categories/categories";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="App">
      <Info />
      <Header />
      <Nav />
      <Cover />
      <Title />
      <Cards />
      <Catalogs />
      <TitleText />
      <Cards />
      <Group />
      <Construct />
      <Services />
      <Desk />
      <Categories />
      <Footer />
    </div>
  );
};

export default App;
