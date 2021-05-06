import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_BOOK', book: {title, author}});
        setTitle('')
        setAuthor('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input 
                type="text" 
                id="title"
                value={title}
                placeholder="add title"
                onChange={(e) => setTitle(e.target.value)} 
                required
            />

            <label htmlFor="author">Author</label>
            <input 
                type="text" 
                id="author"
                value={author}
                placeholder="add author"
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button type="submit">Add book</button>
        </form>
    )
}

export default BookForm;