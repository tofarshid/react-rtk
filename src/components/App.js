import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMeals, getCategories } from '../features/meals/mealSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './global/header';
import Footer from './global/footer';
import Categories from './meals/Categories';
import Meals from './meals/Meals';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getMeals());
  }, [dispatch]);

  const [selected, setSelected] = useState('');
  return (
    <div className='App'>
      <Header />
      <div className='App-content'>
        <Categories selected={selected} setSelected={setSelected} />
        <Meals selected={selected} />
      </div>
      <Footer />
    </div>
  );
};
export default App;
