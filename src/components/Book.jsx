import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, price, subtitle, title } = book;
  return (
    <div>
      <Link to={`../book/${book.isbn13}`}>
        <div to="/home" className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2">
          <img
            src={image}
            alt="book cover"
            className="object-cover w-full h-48 md:h-64 lg:h-80"
          />
          <div className="bg-black  text-white absolute inset-0 transition-opacity duration-200 p-5 opacity-0 hover:opacity-60 rounded-lg flex flex-col">
            <p className="text-xl">{title}</p>
            <p className="my-3">{subtitle.substring(0, 30)}...</p>
            <p className="mt-auto">Price: {price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
