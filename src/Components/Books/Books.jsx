import React from 'react';
import { NavLink } from 'react-router';

const Books = ({ book }) => {
    // console.log(book);
    const {
        bookId,
        bookName,
        author,
        image,
        rating,
        category,
        tags,
        totalPages,
        yearOfPublishing
    } = book;



    // use params code start here now;
   
    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-4">

                {/* Image */}
                <figure className="bg-gray-100 p-6 rounded-xl">
                    <img
                        src={image}
                        alt={bookName}
                        className="h-[220px] object-contain"
                    />
                </figure>

                <div className="card-body p-3">

                    {/* Tags */}
                    <div className="flex gap-2">
                        {
                            tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))
                        }
                    </div>

                    {/* Book Name */}
                    <h2 className="card-title text-xl font-bold mt-2">
                        {bookName}
                    </h2>

                    {/* Author */}
                    <p className="text-gray-500">
                        By : {author}
                    </p>

                    <div className="border-t border-dashed my-2"></div>

                    {/* Bottom Info */}
                    <div className="flex justify-between items-center text-sm">

                        <p>{category}</p>

                        <p>⭐ {rating}</p>

                    </div>

                    <div className="flex justify-between text-sm text-gray-500">
                        <p>{totalPages} Pages</p>
                        <p>{yearOfPublishing}</p>
                    </div>
                    {/* Details btn here  */}
                    <NavLink to={`/details/${bookId}`}>
                        <div className='mt-4 mx-auto'>
                            <button className='btn btn-primary'>View Details</button>
                        </div>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default Books;
/**
 * {
    "bookId": 9,
    "bookName": "The Girl on the Train",
    "author": "Paula Hawkins",
    "image": "https://i.ibb.co.com/P6hfCmJ/Whats-App-Image-2024-05-22-at-11-21-25-2e21ae46.jpg",
    "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    "totalPages": 316,
    "rating": 4.2,
    "category": "Mystery",
    "tags": [
        "Suspense",
        "Psychological"
    ],
    "publisher": "Riverhead Books",
    "yearOfPublishing": 2015
}
 */