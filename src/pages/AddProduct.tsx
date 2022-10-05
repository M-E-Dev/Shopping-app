import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { sendProduct } from "../redux/slices/cartSlice"
import { AppDispatch } from "../redux/store"

const AddProduct = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate()

    let productBase = {
    "name": "",
    "price": 1,
    "category": "",
    "description": "",
    "avatar": "",
    "developerEmail": "",
    }

    const [newProduct, setNewProduct] = useState(productBase)

    const handlePost = () => {
        dispatch(sendProduct(newProduct))
        navigate("/")
    }

    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    return (
        <div className=" flex flex-col border-gray-800 bg-gray-900 p-8 shadow-xl w-full">
            <div className="text-center text-white text-5xl mb-10">Add New Products</div>
            <section>
                <div className="relative mx-auto w-80 max-w-screen-xl px-4 py-8">
                    <form >
                        <div className="relative z-0 mb-2 w-full group">
                        <label htmlFor="product_category" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                            <div className="flex pt-5 w-full justify-center">
                                <div className="w-full" >
                                    <select onChange={(e) => setNewProduct({...newProduct, category:e.target.value})} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option >Select from here...</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Clothing">Clothing</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Hobby">Hobby</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input onChange={(e) => setNewProduct({...newProduct, name:e.target.value})} type="text" name="product_name" id="product_name" className="block py-2.5 px-0 w-full text-sm text-black-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="product_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                        </div>
                        <div className="relative z-0 mb-6 w-100 group">
                            <input onChange={(e) => setNewProduct({...newProduct, price:Math.round(parseFloat(e.target.value))})} type="number" name="product_price" id="product_price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="product_price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input onChange={(e) => setNewProduct({...newProduct, description:e.target.value})} type="text" name="product_description" id="product_description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="product_description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input onChange={(e) => setNewProduct({...newProduct, avatar:e.target.value})} type="text" name="product_avatar" id="product_avatar" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="product_avatar" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Avatar Adress</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input onChange={(e) => setNewProduct({...newProduct, developerEmail:e.target.value})} type="text" name="developer_email" id="developer_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="developer_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Developer Email</label>
                        </div>

                        <button onClick={handlePost} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default AddProduct;