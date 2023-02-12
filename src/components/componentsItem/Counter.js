import shirt from "./../../assets/1.webp";
import deleteBin from "./../../assets/delete.svg";
import favorite from "./../../assets/heart-fill.svg";
import dash from "./../../assets/dash.svg";
import plus from "./../../assets/plus.svg";


const Counter = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-between rounded-lg m-4 p-3 border-gray-100 border-2">
                <div className="w-28 h-28">
                    <img src={shirt} alt={shirt} className="w-28 h-28" />
                </div>
                <div className="flex flex-col items-start justify-start space-y-3 p-2 w-36 h-28 text-md font-extrabold">
                    <p className="text-sm">Men's Regular Fit T-shirt</p>
                    <p className="text-cyan-500">₦299.34</p>
                </div>
                <div className="flex flex-col w-32 h-28 p-2 space-y-9">
                    <div className="flex flex-row items-center justify-end space-x-3">
                        <img src={favorite} alt={favorite} className="h-6 w-6" />
                        <img src={deleteBin} alt={deleteBin} className="h-7 w-7" />
                    </div>
                    <div className="flex flex-row h-9 w-28 border-gray-100 border-2 ">
                        <div className="flex flex-auto items-center  h-8 w-1/3">
                            <img src={dash} alt={dash} className="h-8 w-8" />
                        </div>
                        <div className="flex flex-auto h-8 w-1/3 bg-gray-200">
                            <p className="m-auto text-gray-500 font-bold">4</p>
                        </div>
                        <div className="flex flex-auto items-center h-8 w-1/3">
                            <img src={plus} alt={plus} className="h-8 w-8" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;