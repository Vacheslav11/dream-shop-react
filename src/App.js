import React from 'react';

import Header from "./components/header/header";
import Home from "./components/home/home";
import List from  "./components/list/list";
import Cover from "./components/cover/cover";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <List/>
            <Cover/>
        </div>
    );
};

export default App;