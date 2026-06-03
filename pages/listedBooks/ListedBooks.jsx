import React, { useContext } from 'react';
import { BookContext } from '../../src/context/BookContextProvider';

const ListedBooks = () => {
     const { sotredBooks, wishListBooks } =useContext(BookContext);
    console.log( sotredBooks)
    return (
        <div>
            {sotredBooks.map((book) => (
                <div key={book.bookId} className='border p-4 my-4'>
                    <h2 className='text-xl font-bold'>{book.bookName}</h2>
                    <p>by {book.author}</p>
                </div>
            ))}

            {
                wishListBooks.map((book)=>
                <div key={book.bookId} className='border p-4 my-4'>
                    <h2 className='text-xl font-bold'>{book.bookName}</h2>
                    <p>by {book.author}</p>
                </div>
                )
            }
        </div>
    );
};

export default ListedBooks;