import React, { createContext, useContext, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../components/global/Modal';

const InfoContext = createContext({});

const MyModal = ({ onClose }) => {
  const { meals, selectedMealId } = useSelector((state) => state.meals);
  const meal = meals.filter((item) => item.idMeal === selectedMealId)[0];
  return (
    <Modal title={meal.strMeal} onClose={onClose}>
      <b>Category:</b> {meal.strCategory}
      <div>{meal.strInstructions}</div>
    </Modal>
  );
};

export const InfoProvider = ({ children }) => {
  const [close, setClose] = useState(false);
  const onClose = () => setClose(false);
  const onInfo = useCallback(() => setClose(true));
  return (
    <InfoContext.Provider value={onInfo}>
      {close && <MyModal onClose={onClose} />}
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => useContext(InfoContext);

export default {};
