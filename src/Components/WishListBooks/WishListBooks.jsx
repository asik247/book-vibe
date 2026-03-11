import React, { useEffect, useState } from 'react';
import { getStoredBook, removeDetails } from '../../Utlity/Utlity';
import { useLoaderData } from 'react-router';
import WishListBook from '../WishListBook/WishListBook';

const WishListBooks = () => {
    const [book, setBook] = useState([])
    const allBooks = useLoaderData();
    console.log(allBooks);



    // handle remove;
    const handleRemove = (id) => {
        console.log(id);
        const reminingBook = book.filter(b=>b.bookId !== id)
        setBook(reminingBook)
        removeDetails(id)

    }

    // get array DB;
    useEffect(() => {
        const getAllArrayDB = getStoredBook();
        console.log(getAllArrayDB);
        const matchId = [];
        for (const item of getAllArrayDB) {
            console.log(item);
            const singleId = allBooks.find(book => book.bookId === item);
            if (singleId) {
                matchId.push(singleId)
            }
        }
        setBook(matchId)
    }, [])



    return (
        <div>
            <h1>All WishList ({book.length})</h1>

            <div >
                {
                    book.map(bk => <WishListBook handleRemove={handleRemove} key={bk.bookId} bk={bk}></WishListBook>)
                }
            </div>
        </div>
    );
};

export default WishListBooks;