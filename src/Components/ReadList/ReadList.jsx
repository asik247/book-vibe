import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utlity/Utlity';
import WishListBook from '../WishListBook/WishListBook';

const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");

    const data = useLoaderData();

    useEffect(() => {
        const storedData = getStoredBook();

        const myReadList = data.filter(book =>
            storedData.includes(book.bookId)
        );

        setReadList(myReadList);

    }, [data]);


    // Sort Function
    const handleSort = (type) => {

        setSort(type);

        if (type === 'pages') {

            const sortedData = [...readList].sort(
                (a, b) => b.totalPages - a.totalPages
            );

            setReadList(sortedData);
        }

        if (type === 'rating') {

            const ratingData = [...readList].sort(
                (a, b) => b.rating - a.rating
            );

            setReadList(ratingData);
        }
    }


    return (
        <div className='max-w-7xl mx-auto'>

            {/* Sort Section */}

            <div className="flex justify-center my-10">

                <details className="dropdown">

                    <summary className="btn btn-success text-white px-8">
                        Sort By : {sort ? sort : "Select"}
                    </summary>

                    <ul className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li>
                            <button onClick={() => handleSort("pages")}>
                                Sort by Pages
                            </button>
                        </li>

                        <li>
                            <button onClick={() => handleSort("rating")}>
                                Sort by Rating
                            </button>
                        </li>

                    </ul>

                </details>

            </div>


            {/* Tabs */}

            <Tabs>

                <TabList>
                    <Tab>Read List Book</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>


                {/* Read List */}

                <TabPanel>

                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Book I read {readList.length}
                    </h2>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {
                            readList.map(book =>

                                <WishListBook
                                    key={book.bookId}
                                    bk={book}
                                />

                            )
                        }

                    </div>

                </TabPanel>


                {/* Wish List */}

                <TabPanel>

                    <h2 className="text-2xl font-bold text-center">
                        All Wish List Book
                    </h2>

                </TabPanel>

            </Tabs>

        </div>
    );
};

export default ReadList;