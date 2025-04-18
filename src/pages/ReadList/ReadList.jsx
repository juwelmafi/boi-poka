import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utilities/ReadList";
import ReadItem from "../../components/ReadItem/ReadItem";
import { IoMdArrowDropdown } from "react-icons/io";
import { getWishStoredBook } from "../../utilities/WishList";



const ReadList = () => {
  const [myReadList, setMyReadList] = useState([]);
  const [myWishList, setMyWishList] = useState([])
  const [sort, setSort] = useState('')
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const readList = data.filter((book) =>
      storedBookData.includes(book.bookId)
    );
    setMyReadList(readList);
  }, []);


  useEffect(()=>{
    const storedBookData = getWishStoredBook();
    const wishList = data.filter((book)=> storedBookData.includes(book.bookId))
    setMyWishList(wishList);
  }, [])

  const handleSort = (type)=>{
    setSort(type);
    if(type === "Pages"){
        const sortedByPage = [...myReadList].sort((a,b)=>a.totalPages-b.totalPages);
        const sortedByPage2 = [...myWishList].sort((a,b)=>a.totalPages-b.totalPages);
        setMyReadList(sortedByPage);
        setMyWishList(sortedByPage2);
    }if(type === "Rating"){
      const sortedByRatings = [...myReadList].sort((a,b)=>a.rating - b.rating);
      const sortedByRatings2 = [...myWishList].sort((a,b)=>a.rating - b.rating);
      setMyWishList(sortedByRatings);
      setMyWishList(sortedByRatings2);
    }
  }


  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl text-center font-bold mt-10 bg-base-200 p-5 rounded-lg mb-5">
        Books
      </h1>
      <div className="flex justify-center items-center my-8">
      <details className="dropdown bg-green-400 rounded-md">
        <summary className="btn bg-green-400 border-none shadow-none text-white m-1">Sort By: {sort? sort : <IoMdArrowDropdown size={20}/>}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={()=>handleSort('Pages')}>Pages</a>
          </li>
          <li>
            <a onClick={()=>handleSort('Rating')}>Ratings</a>
          </li>
        </ul>
      </details>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-5">
          {myReadList.map((book) => (
            <ReadItem key={book.bookId} book={book}></ReadItem>
          ))}
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
        {myWishList.map((book) => (
            <ReadItem key={book.bookId} book={book}></ReadItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadList;
