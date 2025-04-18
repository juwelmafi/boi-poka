import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { NavLink } from 'react-router';

const Book = ({book}) => {
  const {author, bookId, bookName, category, image, rating, tags, totalPages} = book;
  return (
    <NavLink to= {`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-sm p-4">
  <figure className='bg-base-200 p-5'>
    <img
    className='w-[150px] h-[200px] object-cover rounded-md'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex gap-2'>
    {
      tags.map((tag, index)=> <div key={index} className='bg-base-200 px-2 py-1 rounded-lg text-green-400'>
        <span>{tag}</span>
      </div>)
    }
    </div>
    <h2 className="card-title">
       {bookName}
      <div className="badge badge-secondary">{totalPages}</div>
    </h2>
    <p>By: {author}</p>
    <div className="card-actions justify-between mt-2 border-t border-dashed border-gray-300 pt-2">
      <div className="">{category}</div>
      <div className="flex justify-center items-center gap-1">{rating} <FaStarHalfAlt />
      </div>
    </div>
  </div>
</div>
    </NavLink>
  );
};

export default Book;