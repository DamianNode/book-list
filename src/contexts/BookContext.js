import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = ({children}) => {
    const [books, setBooks] = useState([
        { title: 'the way of kings', author: 'patrick', id: uuid() },
        { title: 'the name of the wind', author: 'malcolm', id: uuid() },
        { title: 'the final empire', author: 'johnatan', id: uuid() },
    ])

    const addBook = ({title, author}) => {
        const newBook = {
            title, author, id: uuid()
        }
        setBooks([...books, newBook])
    }

    const removeBook = (id) => {
        const newBooks = books.filter(book => book.id !== id)
        setBooks(newBooks)
    }

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;