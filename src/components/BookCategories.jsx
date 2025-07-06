
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const BookCategories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/categories')
      .then(res => setCategories(res.data.categories)) 
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  const handleCategoryClick = (categoryId) => {
    console.log("Selected category id:", categoryId);
    navigate(`/category/${categoryId}`);
  };
  

  return (
    <>
      <h2 className="text-[#141316] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Top Book Categories
      </h2>
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {categories.map(category => (
          <button
            key={category._id}
            onClick={() => handleCategoryClick(category._id)}
            className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f2f1f3] pl-4 pr-4 hover:bg-[#e0dcec] transition"
          >
            <p className="text-[#141316] text-sm font-medium leading-normal">
              {category.name}
            </p>
          </button>
        ))}
      </div>
    </>
  );
};

export default BookCategories;
