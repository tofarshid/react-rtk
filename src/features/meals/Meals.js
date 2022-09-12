import React from "react";
import { useSelector } from "react-redux";

const Card = ({ meal }) => {
  return (
    <div
      className="col-lg-4 mb-3 d-flex align-items-stretch h-100 m-2"
      key={meal.id}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-black">{meal.strMeal}</h5>
          <p className="card-text text-black">{meal.idMeal}</p>
        </div>
      </div>
    </div>
  );
};

const Meals = () => {
  const { data, loading, error } = useSelector((state) => state.meals);

  let content;
  if (loading === "pending") {
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (loading === "idle") {
    content = data.map((item) => {
      return <Card meal={item} key={item.id} />;
    });
  }
  if (error !== null) {
    content = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }
  return <div className="d-flex flex-wrap">{content}</div>;
};

export default Meals;
