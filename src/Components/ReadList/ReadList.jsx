import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utlity/Utlity';
import WishListBook from '../WishListBook/WishListBook';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const data = useLoaderData();
    console.log(data);


    useEffect(() => {
        const storedData = getStoredBook();
        console.log(storedData);
        const myReadList = data.filter(book => storedData.includes(book.bookId));
        setReadList(myReadList);
    }, [])




    return (
        <div>
            {/* sorted functionality */}
            <details className="dropdown mt-10">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read List Book</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read {readList.length}</h2>
                    {
                        readList.map(b=><WishListBook bk={b}></WishListBook>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>All Wish list book</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;