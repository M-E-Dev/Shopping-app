import  { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../redux/slices/cartSlice';
import { AppDispatch } from '../redux/store';
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate()

  
  const [effect, setEffect] = useState(false);

  const detailProduct = useLocation().state;

  const favoriteHandler = () => {
    dispatch(addToFavorites(detailProduct._id))
    setEffect(true);
  }
  const backHandler = () => {
    navigate("/")
  }

  return (
    <div className="flex flex-col border-gray-800 bg-gray-900 p-4 shadow-xl w-full">
      <div className="relative mx-auto w-full px-4 py-8 pt-12">
        <div className='pb-8'>
          <button  onClick={backHandler} className='border rounded-md w-24 hover:bg-violet-600 '>
          <h3 className='text-pink-200 hover:text-zinc-900 text-xl px-3 py-3'>Back</h3>
          </button>
        </div>
          <div>
            <h1 className="text-2xl text-white font-bold lg:text-3xl">{detailProduct.name}</h1>

            <p className="mt-1 text-sm text-gray-500">{detailProduct.category}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
              <div className="relative mt-4">
                <img
                  alt={detailProduct.name}
                  src={detailProduct.avatar}
                  className="h-60 w-full rounded-xl object-cover lg:h-[540px]"
                />

                <div
                  className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-0">
              <form className="space-y-4 lg:pt-8">
                <fieldset>
                  <legend className="text-lg text-white font-bold"> {detailProduct.description} </legend>
                </fieldset>
                <div>
                  <p className="text-xl text-white font-bold">{detailProduct.price} £</p>
                </div>

                <button
                onClick={favoriteHandler}
                onAnimationEnd={() => setEffect(false)}
                type="button"
                  className={`${
                    effect && "animate-wiggle"
                  } w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white`}
                >
                  Add to favorites
                </button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetail
