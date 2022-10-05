import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromFavorites } from "../../redux/slices/cartSlice";
import { AppDispatch } from "../../redux/store";

type BCard = {
  item: any;
};

const FavoriteCard = ({ item }: BCard) => {
  const dispatch: AppDispatch = useDispatch();
  const openDetails = () => {
    navigate("/detail", {state: item});
  }
  const favoriteHandler = () => {
    dispatch(removeFromFavorites(item._id))
  }
  console.log(item);
  const navigate = useNavigate()
  return (
    <div className="group relative block h-96" >
      {/* ------------------------------------------------------------------------------------------------------------------- */}
          <div className="group rounded-lg relative block h-80 w-full" >
      <div
        className="relative rounded-lg flex h-full transform justify-center items-center border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
      >
        <div className="px-2 pb-8 mt-3 transition-opacity group-hover:absolute group-hover:opacity-0">
          <div className="block  border-gray-800  top-0">
            <img src={item.avatar} alt={item.name} className="rounded-xl max-h-44 " />
          </div>
          <h2 className="mt-4 text-lg md:text-sm text-center font-medium">{item.name}</h2>
          <h2 className="mt-4 text-lg text-center font-medium">{item.price} £</h2>
        </div>
        <div
          className="absolute p-2 space-y-4 opacity-0 content-center transition-opacity group-hover:relative group-hover:opacity-100"
        >

          <button onClick={openDetails} type="button" className="block min-w-[100%] rounded border border-gray-800 bg-sky-700 p-3 shadow-xl hover:bg-sky-900">
            Details
          </button>
          <button onClick={favoriteHandler} type="button" className="block min-w-[100%] rounded border border-gray-800 bg-sky-700 p-3 shadow-xl hover:bg-sky-900">
          Remove From Favorites
          </button>
        </div>
      </div>
    </div>

    </div>
    

  );
};

export default FavoriteCard;
