import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import BookCard from '../components/BookCard';

const CategoryBooks = () => {
  const { categoryId } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/summary/category/${categoryId}`)
      .then(res => {
        console.log('Books response:', res.data);
        setBooks(res.data.summaries); 
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching books:', err);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <p className="text-center py-5">Loading...</p>;

  return (
    <div className="px-4 sm:px-10 lg:px-40 py-5">
      <h2 className="text-[#141316] text-[28px] font-bold leading-tight pb-5">Books in Category</h2>
      {books.length === 0 ? (
        <p className="text-center text-gray-500">No books found in this category.</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
        {books.slice(0, 5).map(book => (
            <BookCard
  id={book._id}
  title={book.title}
  author={book.author}
  image={book.coverImage?.path}
/>

))}

        </div>
      )}
    </div>
  );
};

export default CategoryBooks;
