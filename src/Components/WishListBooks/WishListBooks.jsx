import React, { useEffect, useState } from 'react';
import { getStoredBook } from '../../Utlity/Utlity';
import { useLoaderData } from 'react-router';
import WishListBook from '../WishListBook/WishListBook';

const WishListBooks = () => {
    const [book, setBook] = useState([])
    const allBooks = useLoaderData();
    console.log(allBooks);

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
            <h1>All wihs list ami pore pore nio akhn save kroejlkfaksfhklfafh afhhflffafasfaf</h1>

            <div >
                {
                    book.map(bk => <WishListBook bk={bk}></WishListBook>)
                }
            </div>
        </div>
    );
};

export default WishListBooks;