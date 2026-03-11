import React, { useEffect, useState } from 'react';
import { getStoredBook, removeDetails } from '../../Utlity/Utlity';
import { useLoaderData } from 'react-router';
import WishListBook from '../WishListBook/WishListBook';
import Swal from 'sweetalert2';

const WishListBooks = () => {

    const [book, setBook] = useState([]);
    const allBooks = useLoaderData();


    // remove book
    const handleRemove = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "This book will be removed!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#22c55e",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {

            if (result.isConfirmed) {

                const remainingBook = book.filter(b => b.bookId !== id);

                setBook(remainingBook);

                removeDetails(id);

                Swal.fire(
                    "Removed!",
                    "Book removed from wishlist.",
                    "success"
                );
            }

        });

    }


    useEffect(() => {

        const storedBookIds = getStoredBook();

        const myWishList = allBooks.filter(book =>
            storedBookIds.includes(book.bookId)
        );

        setBook(myWishList);

    }, [allBooks]);


    return (
        <div>

            <h1 className='font-bold text-2xl text-center mt-5'>
                All WishList ({book.length})
            </h1>

            <div >

                {
                    book.map(bk =>
                        <WishListBook
                            key={bk.bookId}
                            bk={bk}
                            handleRemove={handleRemove}
                        />
                    )
                }

            </div>

        </div>
    );
};

export default WishListBooks;