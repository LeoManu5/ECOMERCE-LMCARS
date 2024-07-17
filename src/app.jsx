import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenido a LMCARS Seguridad Automotor" />} />
                <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoría" />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            </Routes>
        </Router>
    );
};

export default App;
