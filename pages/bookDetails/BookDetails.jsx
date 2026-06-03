import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import  { BookContext } from '../../src/context/BookContextProvider';

 

const BookDetails = () => {
    const {bookId:booksParamsId} =useParams();
    // console.log({bookId:booksParamsId}, "params")
    const books= useLoaderData(); 
    // console.log(books, "books")
    const expectedBook =books.find(book=> book.bookId == booksParamsId)
    // console.log(expectedBook, "expectedBook")

    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} =expectedBook;

   const {handelMarkAsRead, sotredBooks} =useContext(BookContext);
   const {handleAddToWishlist} =useContext(BookContext);
    return (
        <div className="grid grid-cols-2 lg:card-side bg-base-100 shadow-sm container mx-auto my-10">
  <figure className='w-full flex items-center justify-center bg-gray-100 rounded-xl py-10'>
    <img
      src={image}
      alt="Album"
      className=" w-[400px]  " />
  </figure>
  <div className="card-body space-y-3 ">
    <h2 className="card-title">{bookName}</h2>
    <p>by {author}</p>
    <p className='py-2 border-y'>{category}</p>
    <p>Review:{review}</p>
    {
        tags.map((tag, ind)=> <div key={ind} className='badge text-green-500 bg-green-100 font-bold'>{tag}</div>)
    }
    <div className=" border-t space-y-3">
        <div className='flex items-center justify-between gap-2'>
            <span>Number of Pages: </span> <span className='font-bold'>{totalPages}</span>
        </div>
        <div className='flex items-center justify-between gap-2'>
            <span>Publisher: </span> <span className='font-bold'>{publisher}</span>
            
        </div>
        <div className='flex items-center justify-between gap-2'>
            <span>Year of Publishing: </span> <span className='font-bold'>{yearOfPublishing}</span>
        </div>
         <div className='flex items-center justify-between gap-2'>
            <span>Rating: </span> <span className='font-bold'>{rating}</span>
        </div>
      <div className='flex items-center gap-2'>
        <button className="btn " onClick={()=> handelMarkAsRead(expectedBook)}>
          Mark as Read
        </button>
        <button className="btn btn-primary" onClick={()=> handleAddToWishlist(expectedBook)}>Add to Wishlist</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default BookDetails;