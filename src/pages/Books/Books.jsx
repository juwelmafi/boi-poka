import React from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
  return (
    <div className='mt-10 max-w-6xl mx-auto'>
      <h1 className='text-4xl text-center font-semibold'>Books</h1>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {
        data.map((book)=> <Book key={book.bookId} book = {book}></Book>)
      }
      </div>
    </div>
  );
};

export default Books;