import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMeal } from '../../features/meals/mealSlice';
import { useInfo } from '../../provider/info';
import styled from 'styled-components';

const StyledCard = styled.a`
  width: 7rem;
  padding: 4px;
  font-size: 16px;
  :hover {
    cursor: pointer;
  }
`;
const Meal = ({ meal, onItemClick }) => {
  return (
    <StyledCard className='card m-1' key={meal.idMeal} onClick={() => onItemClick(meal.idMeal)}>
      <img className='card-img-top' src={meal.strMealThumb} alt='Card image cap' />
      <div className='card-body p-1'>
        <p className='card-text text-dark'>{meal.strMeal}</p>
      </div>
    </StyledCard>
  );
};
const Meals = ({ selected }) => {
  const { meals, loading, error } = useSelector((state) => state.meals);
  const { categories, selectedMealId } = useSelector((state) => state.meals);
  const dispatch = useDispatch();
  const onUseInfo = useInfo();
  const onClick = (v) => {
    onUseInfo();
    dispatch(setMeal(v));
  };
  const showAlltext = (s) => s.length === 0 || s.split(',').length === categories.length;

  let content;
  if (loading === 'pending') {
    content = (
      <div className='d-flex justify-content-center text-black'>
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  }
  if (loading === 'idle') {
    content = meals
      .filter((item) =>
        selected.length > 0 ? selected.split(',').includes(item.strCategory) : true
      )
      .map((item, i) => {
        return <Meal meal={item} key={`${i}`} onItemClick={onClick} />;
      });
  }
  if (error !== null) {
    content = (
      <div className='alert alert-danger' role='alert'>
        {error}
      </div>
    );
  }
  return (
    <>
      <h5 className=' text-black px-2 mt-3'>
        <u>Meals{`${showAlltext(selected) ? '(All)' : ''}`}:</u>
      </h5>
      <div className='d-flex flex-wrap'>{content}</div>
    </>
  );
};
export default Meals;
