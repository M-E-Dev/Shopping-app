import { useNavigate } from "react-router-dom";
import upayments from "../../utility/upayments.png"

const Navbar = () => {
    const navigate = useNavigate()

    const handleHome = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        navigate("/")
    };
    const handleFav = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        navigate("/favorites")
    };
    const handleAdd = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        navigate("/addproduct")
    };

    return (
        <div className='min-h-full flex-row'>
            <div className=" w-64 relative bg-sky-900 h-full">
                <div className="px-8 sticky place-items-center top-1/4">
                    <ul >

                        <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                            <div onClick={handleHome} className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path fill="yellow" d="M15.971,7.708l-4.763-4.712c-0.644-0.644-1.769-0.642-2.41-0.002L3.99,7.755C3.98,7.764,3.972,7.773,3.962,7.783C3.511,8.179,3.253,8.74,3.253,9.338v6.07c0,1.146,0.932,2.078,2.078,2.078h9.338c1.146,0,2.078-0.932,2.078-2.078v-6.07c0-0.529-0.205-1.037-0.57-1.421C16.129,7.83,16.058,7.758,15.971,7.708z M15.68,15.408c0,0.559-0.453,1.012-1.011,1.012h-4.318c0.04-0.076,0.096-0.143,0.096-0.232v-3.311c0-0.295-0.239-0.533-0.533-0.533c-0.295,0-0.534,0.238-0.534,0.533v3.311c0,0.09,0.057,0.156,0.096,0.232H5.331c-0.557,0-1.01-0.453-1.01-1.012v-6.07c0-0.305,0.141-0.591,0.386-0.787c0.039-0.03,0.073-0.066,0.1-0.104L9.55,3.75c0.242-0.239,0.665-0.24,0.906,0.002l4.786,4.735c0.024,0.033,0.053,0.063,0.084,0.09c0.228,0.196,0.354,0.466,0.354,0.76V15.408z"></path>
                                </svg>
                                <span className="text-xl ml-2">HOME</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                            <div onClick={handleFav} className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path fill="yellow" d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"></path>
                                </svg>
                                <span className="text-xl ml-2">FAVORITES</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                            <div onClick={handleAdd} className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path fill="white" d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
                                </svg>
                                <span className="text-xl ml-2">Add New Product</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-400  hover:text-gray-300 cursor-pointer items-center mb-6">
                            <a href="https://upayments.com/en/" target="_blank" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                <img src={upayments} alt="upayments" className="rounded-3xl"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar