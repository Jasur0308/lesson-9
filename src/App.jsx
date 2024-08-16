import { Route, Routes } from 'react-router-dom';
import ProductPage from './components/product-page/ProductPage';
import Recipes from './components/recipes/Recipes';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Recipes />} />
                <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
        </>
    );
};

export default App;