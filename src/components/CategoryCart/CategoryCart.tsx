import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { filterProducts } from "../../redux/slices/cartSlice";


type BCard = {
    item: any;
};

const CategoryCart= ({ item }: BCard) => {
  const dispatch: AppDispatch = useDispatch();

    const handleChange = () => {
        dispatch(filterProducts(item.name))
    }

    return (
        <div
            className="block rounded-xl border border-gray-800 bg-gray-900 p-3 shadow-xl hover:bg-violet-600"
            onClick={handleChange}
        >
            <svg className="svg-icon" viewBox="0 0 20 20">
                <path fill="white" d="M7.93,4.509H9.62v1.689c0,0.233,0.189,0.422,0.422,0.422s0.422-0.189,0.422-0.422V4.509h1.689c0.233,0,0.423-0.189,0.423-0.422s-0.189-0.422-0.423-0.422h-1.689V1.975c0-0.233-0.189-0.422-0.422-0.422S9.62,1.742,9.62,1.975v1.689H7.93c-0.233,0-0.422,0.189-0.422,0.422S7.697,4.509,7.93,4.509 M18.489,8.311H1.595c-0.466,0-0.845,0.378-0.845,0.845V10c0,0.466,0.378,0.845,0.845,0.845h0.169l1.533,7.282l0.007-0.001c0.046,0.183,0.205,0.321,0.402,0.321h12.67c0.198,0,0.356-0.139,0.403-0.321l0.007,0.001l1.533-7.282h0.169c0.466,0,0.845-0.379,0.845-0.845V9.155C19.334,8.689,18.955,8.311,18.489,8.311 M2.626,10.845H5.53l0.266,1.689H2.982L2.626,10.845z M3.16,13.379h2.769l0.267,1.689H3.515L3.16,13.379z M4.049,17.603l-0.355-1.689h2.636l0.267,1.689H4.049z M9.62,17.603H7.441l-0.267-1.689H9.62V17.603z M9.62,15.068H7.041l-0.267-1.689H9.62V15.068z M9.62,12.534H6.641l-0.266-1.689H9.62V12.534z M12.644,17.603h-2.179v-1.689h2.446L12.644,17.603zM13.043,15.068h-2.579v-1.689h2.845L13.043,15.068z M10.464,12.534v-1.689h3.245l-0.266,1.689H10.464z M16.035,17.603h-2.548l0.268-1.689h2.636L16.035,17.603z M16.569,15.068h-2.682l0.267-1.689h2.77L16.569,15.068z M17.103,12.534h-2.814l0.267-1.689h2.903L17.103,12.534z M18.489,10H1.595V9.155h16.895V10z"></path>
            </svg>
            <h3 className="mt-3 text-lg font-bold text-white">{item.name}</h3>
        </div>
    );
};

export default CategoryCart;

