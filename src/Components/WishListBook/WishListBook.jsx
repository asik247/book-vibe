// import React, { useState } from 'react';
import { Navigate } from 'react-router';
// import { removeDetails } from '../../Utlity/Utlity';

const WishListBook = ({ bk,handleRemove }) => {
    // const [vistiHome,setVisitHome] = useState(false)

    const {
        bookName,
        bookId,
        author,
        review,
        image,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing
    } = bk;

  

    return (
        <div className="max-w-6xl mx-auto p-6">

            <div className="grid md:grid-cols-2 gap-10 bg-base-100 shadow-xl p-6 rounded-2xl">

                {/* Image */}
                <div className="flex justify-center items-center bg-gray-100 rounded-xl p-6">
                    <img
                        src={image}
                        alt={bookName}
                        className="rounded-xl max-h-[450px] object-cover"
                    />
                </div>

                {/* Details */}
                <div className="space-y-4">

                    <h1 className="text-4xl font-bold">{bookName}</h1>

                    <p className="text-gray-500 text-lg">
                        By : <span className="font-semibold">{author}</span>
                    </p>

                    <div className="divider"></div>

                    <p>
                        <span className="font-semibold">Category:</span>{" "}
                        {category}
                    </p>

                    <p>
                        <span className="font-semibold">Rating:</span>{" "}
                        ⭐ {rating}
                    </p>

                    <p>
                        <span className="font-semibold">Pages:</span>{" "}
                        {totalPages}
                    </p>

                    <p>
                        <span className="font-semibold">Publisher:</span>{" "}
                        {publisher}
                    </p>

                    <p>
                        <span className="font-semibold">Year:</span>{" "}
                        {yearOfPublishing}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="badge badge-outline badge-success"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="divider"></div>

                    {/* Review */}
                    <p className="text-gray-600 leading-relaxed">
                        {review}
                    </p>

                    <button className="btn btn-success mt-4">
                        Add to Wish List
                    </button>



                    <button onClick={()=>handleRemove(bookId)} className='btn btn-success ml-4'>Home</button>
                    {/* decrected home */}
                    {/* <button onClick={()=>setVisitedHome(true)} className='btn btn-success ml-4'>Home</button> */}

                </div>
                {/* decreacted home  */}
                {/* {
                    vistiHome && <Navigate to={'/'}></Navigate>
                } */}
            </div>

        </div>
    );
};

export default WishListBook;