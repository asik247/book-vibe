import React from 'react';

const HookT = ({product}) => {
    console.log(product);
    return (
         <div className="w-10/12 mx-auto mt-10 mb-10">

            <h1 className="text-2xl font-bold text-center mb-6">
                Product Table ({product.length})
            </h1>

            <div className="overflow-x-auto bg-white shadow-lg rounded-xl">

                <table className="table-auto w-full border-collapse">

                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="p-3 border">No</th>
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Product</th>
                            <th className="p-3 border">Quantity</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            product.map((product, index) => (
                                <tr
                                    key={index}
                                    className="text-center hover:bg-gray-100"
                                >
                                    <td className="p-2 border">{index + 1}</td>
                                    <td className="p-2 border">{product.name}</td>
                                    <td className="p-2 border">{product.pName}</td>
                                    <td className="p-2 border">{product.quentity}</td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default HookT;