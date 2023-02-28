import { useState } from "react";
import starEmpty from "../../assets/star.svg";
import starHalf from "../../assets/star-half.svg";
import starFill from "../../assets/star-fill.svg";

const Star = ({ value }) => {
    const [rating, setRating] = useState(0);
    console.log(rating);
    if (value === 0) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" />
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
            </div>
        )
    }

    if (value < 1) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starHalf} alt={starHalf} className="w-5 h-5" onClick={() => setRating(1)}/>
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
            </div>
        )
    }

    if (value === 1) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className="w-5 h-5" />
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
            </div>
        )
    }

    if (value < 2) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className="w-5 h-5" />
                <img src={starHalf} alt={starHalf} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
            </div>
        )
    }

    if (value === 2) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className="w-5 h-5" />
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
            </div>
        )
    }

    if (value < 3) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className="w-5 h-5" />
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starHalf} alt={starHalf} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
            </div>
        )
    }

    if (value === 3) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className="w-5 h-5" />
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
            </div>
        )
    }

    if (value < 4) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className="w-5 h-5" />
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starHalf} alt={starHalf} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
            </div>
        )
    }

    if (value === 4) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className="w-5 h-5" />
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starEmpty} alt={starEmpty} className="w-5 h-5" /> 
            </div>
        )
    }

    if (value < 5) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className="w-5 h-5" />
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starHalf} alt={starHalf} className="w-5 h-5" /> 
            </div>
        )
    }

    if (value === 5) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className="w-5 h-5" />
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
                <img src={starFill} alt={starFill} className="w-5 h-5" /> 
            </div>
        )
    }

}

export default Star;

