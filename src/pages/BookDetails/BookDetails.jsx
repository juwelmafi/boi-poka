import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utilities/ReadList";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { addToWishStoredDB } from "../../utilities/WishList";

const MySwal = withReactContent(Swal)

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const convertedId = parseInt(id);
  const book = data.find((currentBook) => currentBook.bookId === convertedId);
  const {
    author,
    review,
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

  const handleReadList = (id)=>{
    Swal.fire({
      title: "Successfully",
      text: "Added to Read",
      icon: "success"
    });
    addToStoredDB(id)
  }

  const handleWishList =(id)=>{
    Swal.fire({
      title: "Successfully",
      text: "Added to Wishlist",
      icon: "success"
    });
    addToWishStoredDB(id);
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-20">
      <div className=" card flex md:flex-row justify-between gap-10 bg-base-100 shadow-sm p-5">
        <figure className="md:w-[35%] h-[550px] object-cover bg-base-200">
          <img className="w-[70%] h-[450px] rounded-md" src={image} />
        </figure>
        <div className=" space-y-2 md:w-[65%]">
          <h2 className="card-title text-3xl font-semibold">{bookName}</h2>
          <p>By: {author}</p>
          <p className="border-y border-gray-200 py-2 font-semibold mt-3">
            {category}
          </p>
          <p className="mb-3 hidden md:block">
            <span className="font-bold w-[70%]">Review:</span>
            {review}
          </p>
          <div className="flex gap-2 border-b pb-4 border-b-gray-200">
            <span className="font-bold">Tags: </span>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-base-200 px-2 py-1 rounded-lg text-green-400 "
              >
                <span> {tag}</span>
              </div>
            ))}
          </div>
          <table>
            <tbody>
            <tr>
              <td className="px-3">Number of pages:</td>
              <td className="px-3 font-semibold">{totalPages}</td>
            </tr>
            <tr>
              <td className="px-3">Publisher: </td>
              <td className="px-3 font-semibold">{publisher}</td>
            </tr>
            <tr>
              <td className="px-3">Year of publishing: </td>
              <td className="px-3 font-semibold">{yearOfPublishing}</td>
            </tr>
            <tr>
              <td className="px-3">Rating: </td>
              <td className="px-3 font-semibold">{rating}</td>
            </tr>
            </tbody>
          </table>
          <div className="card-actions justify-start mt-4">
            <button className="btn border" onClick={()=>handleReadList(bookId)}>Read</button>
            <button className="btn bg-blue-400 text-white" onClick={()=>handleWishList(bookId)}>Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
