import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import List from "./components/list/list";
import Cover from "./components/cover/cover";
import Title from "./components/title/title";
import Cards from "./components/card/cards";
import Catalogs from "./components/catalog/catalogs";
import TitleText from "./components/title/titleText";
import Group from "./components/group/group";
import Construct from "./components/construct/construct";
import Services from "./components/services/services";
import Desk from "./components/desk/desk";
import End from "./components/end/end";
import DeskEnd from "./components/deskEnd/deskEnd";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <List />
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
      <End />
      <DeskEnd />
    </div>
  );
};

export default App;
