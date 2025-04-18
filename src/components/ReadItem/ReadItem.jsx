import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router";

const ReadItem = ({book}) => {
  const {
    author,
    bookId,
    bookName,
    category,
    image,
    rating,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div>
      
      <div className="card card-side bg-base-100 shadow-sm flex flex-col md:flex-row">
        <figure className="w-[200px] h-[230px] bg-base-200">
          <img
          className="p-5 rounded-md"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p>By: {author}</p>
          <div className="flex flex-col md:flex-row gap-2 border-b pb-4 border-b-gray-200">
            <span className="font-bold">Tags: </span>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-base-200 px-2 py-1 rounded-lg text-green-400 "
              >
                <span> {tag}</span>
              </div>
            ))}
            <h1 className="flex md:justify-center items-center gap-1"><CiLocationOn />Year of Publishing: {yearOfPublishing}</h1>

          </div>
          <div className="flex justify-start items-center gap-3">
              <h1 className="flex justify-center items-center gap-1"><IoPeopleOutline />Publisher: {publisher}</h1>
              <h1 className="flex justify-center items-center gap-1"><FaRegFileAlt />Page: {totalPages}</h1>
            </div>
          <div className="card-actions justify-between items-center">
              <div className="flex justify-start items-center gap-4 mt-5">
              <span className="bg-green-100 px-2 py-1 rounded-lg text-green-400 "> Category: {category}</span>
            <span className="bg-orange-100 px-2 py-1 rounded-lg text-orange-400 "> Rating: {rating}</span>
              </div>
            <Link to = {`/bookDetails/${bookId}`}><button className="btn bg-green-400 text-white">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadItem;
