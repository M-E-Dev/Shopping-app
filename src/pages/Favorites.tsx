import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from 'react';
import FavoriteCard from "../components/FavoriteCart/FavoriteCart";


const Favorites = () => {
  const {deletedFavorites} = useSelector((store: RootState) => store.cart)

  const [favorites, setFavorites] = useState([]);

useEffect(() => {
  setFavorites(JSON.parse(localStorage.getItem('favorites') || ""));
}, []);

useEffect(() => {
  setFavorites(JSON.parse(localStorage.getItem('favorites') || ""));
}, [deletedFavorites]);

  return (
    <div className="flex flex-col border-gray-800 bg-gray-900 p-8 shadow-xl w-full">
      <h1 className="text-white text-5xl text-center pb-5">Favorite Products</h1>
      <div className="grid gap-1 grid-cols-4 m-2">
      { 
      favorites.map((item: any) => <FavoriteCard item={item} key={item._id}/> )
        }
      </div>
    </div>
  )
}

export default Favorites