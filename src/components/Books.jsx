import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const { books } = useLoaderData();
    return (
        <div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {
                    books.map(book => <Book
                        key={book.isbn13}
                        book={book}
                    />)
                }
            </div>
        </div>
    );
};

export default Books;