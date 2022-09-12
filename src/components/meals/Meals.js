import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 7rem;
  padding: 4px;
  font-size: 16px;
`;
const Card = ({ meal }) => {
  return (
    <>
      <StyledCard className='card m-1'>
        <img className='card-img-top' src={meal.strMealThumb} alt='Card image cap' />
        <div className='card-body p-1'>
          <p className='card-text text-dark'>{meal.strMeal}</p>
        </div>
      </StyledCard>
    </>
  );
};
const Meals = ({ selected }) => {
  const { meals, loading, error } = useSelector((state) => state.meals);
  const { categories } = useSelector((state) => state.meals);

  let content;
  if (loading === 'pending') {
    content = (
      <div className='d-flex justify-content-center'>
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
      .map((item) => {
        return <Card meal={item} key={item.id} />;
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
        <u>Meals{`${selected.length === 0 ? '(All)' : ''}`}:</u>
      </h5>
      <div className='d-flex flex-wrap'>{content}</div>
    </>
  );
};
export default Meals;
