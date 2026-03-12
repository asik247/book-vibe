
import useMyHook from '../../Hook/useMyHook';


const HookF = ({handleProduct}) => {

  const [name,handleNameChange] = useMyHook("");
  const [pName,handlePNameChange] = useMyHook("");
  const [quentity,handleQNameChange] = useMyHook("")
  const submitValue = (e)=>{
    e.preventDefault();
    console.log(name,pName,quentity);
    const allProducts = {
        name,
        pName,
        quentity
    }
    handleProduct(allProducts);
  }
 
    return (
        <div className="flex items-center justify-center min-h-screen ">

            <div className="bg-white p-8 rounded-2xl shadow-lg w-80">

                <h1 className="text-2xl font-bold text-center mb-6">
                    Hook Form
                </h1>

                <form onSubmit={submitValue}  className="flex flex-col gap-4">

                    <input
                        type="text"
                        placeholder="Your Name"
                       value={name}
                       onChange={handleNameChange}
                        className="border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="text"
                        placeholder="Product Name"
                        value={pName}
                        onChange={handlePNameChange}
                        className="border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="number"
                        placeholder="Quantity"
                       value={quentity}
                       onChange={handleQNameChange}
                        className="border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="submit"
                        value="Submit"
                        className="bg-blue-500 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-600"
                    />

                </form>

            </div>

        </div>
    );
};

export default HookF;