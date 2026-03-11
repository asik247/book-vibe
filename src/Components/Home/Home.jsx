
import bannerImg from '/books.jpg';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
const Hero = () => {
    // loadder data ;
    const allBooks = useLoaderData()
    console.log(allBooks);

    return (
        <div>
            <div className="bg-gradient-to-r from-green-50 to-gray-100 py-16 rounded-2xl mt-20">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between w-11/12 mx-auto gap-10">

                    {/* Text Section */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Books to refresh <br /> your bookshelf 📚
                        </h1>

                        <p className="text-gray-600 mb-6">
                            Discover amazing books that will inspire your mind and
                            grow your knowledge. Find your next favorite book today.
                        </p>

                        <button className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-xl shadow-md">
                            View The List
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center">
                        <img
                            className="w-72 md:w-96 rounded-2xl shadow-lg"
                            src={bannerImg}
                            alt="Books"
                        />
                    </div>

                </div>
            </div>


            {/* All Books show code start here; */}
            <div >
                <h1 className='font-bold text-2xl text-center mt-5 mb-4'>Books</h1>
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                        allBooks.map(book => <Books key={book.id} book={book}></Books>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Hero;