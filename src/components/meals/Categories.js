import React from 'react';
import { useSelector } from 'react-redux';

const keyify = (i) => `${i}`;

const Categories = ({ selected, setSelected }) => {
  const { categories } = useSelector((state) => state.meals);
  const active = (val) =>
    selected.length > 0 && selected.split(',').filter((item) => item === val).length === 1
      ? true
      : false;
  const setActiveColor = (v) => (v ? 'primary' : 'secondary');

  const setActive = (v) => {
    active(v)
      ? setSelected(
          selected
            .split(',')
            .filter((item) => item !== v)
            .join(',')
        )
      : setSelected(`${selected}${selected.length ? ',' : ''}${v}`);
  };
  return (
    <>
      <h5 className=' text-black px-2'>
        <u>Categories:</u>
      </h5>
      <div className='d-flex flex-wrap'>
        {categories
          .map((item) => item.strCategory)
          .sort()
          .map((item, i) => (
            <button
              type='button'
              className={`btn btn-${setActiveColor(active(item))} m-1 p-1`}
              key={keyify(i)}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
      </div>
    </>
  );
};

export default Categories;
