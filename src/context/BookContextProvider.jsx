
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext =createContext();


const BookContextProvider = ({ children }) => {
    
    const [sotredBooks, setStoredBooks]=useState([]);

    const [wishListBooks, setWishListBooks]=useState([]);

 
    const handelMarkAsRead =(currentBook) => { 
       
        const isExpectedBook=sotredBooks.find(book=>book.bookId === currentBook.bookId);
        if(isExpectedBook){
            toast.error('the book is already marked as read')
        }
        else{
            setStoredBooks([...sotredBooks, currentBook]);
            toast.success(`${currentBook.bookName} is marked as read`)
        }
    }

       const handleAddToWishlist =(currentBook) => {
        
        const isExistInReadList =sotredBooks.find((book)=>book.bookId === currentBook.bookId);
        if(isExistInReadList){
            toast.error('the book is already marked as read, you can not add it to the wishlist')
            return;
        }
        const isWishListedBook = wishListBooks.find(book=> book.bookId === currentBook.bookId);
        if(isWishListedBook){
            toast.error('the book is already in the wishlist')
        }
        else{
            setWishListBooks([...wishListBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to the wishlist`)
        }
    }


    const data ={
        sotredBooks,
        setStoredBooks,
        handelMarkAsRead,
        wishListBooks,
        setWishListBooks,
        handleAddToWishlist
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookContextProvider;