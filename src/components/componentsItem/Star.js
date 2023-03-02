import starEmpty from "../../assets/star.svg";
import starHalf from "../../assets/star-half.svg";
import starFill from "../../assets/star-fill.svg";

const Star = ({ value, starSize }) => {
    if (value === 0) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starEmpty} alt={starEmpty} className={starSize} />
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
            </div>
        )
    }

    if (value < 1) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starHalf} alt={starHalf} className={starSize} />
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
            </div>
        )
    }

    if (value === 1) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className={starSize} />
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
            </div>
        )
    }

    if (value < 2) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className={starSize} />
                <img src={starHalf} alt={starHalf} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
            </div>
        )
    }

    if (value === 2) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className={starSize} />
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
            </div>
        )
    }

    if (value < 3) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className={starSize} />
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starHalf} alt={starHalf} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
            </div>
        )
    }

    if (value === 3) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className={starSize} />
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
            </div>
        )
    }

    if (value < 4) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className={starSize} />
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starHalf} alt={starHalf} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
            </div>
        )
    }

    if (value === 4) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className={starSize} />
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starEmpty} alt={starEmpty} className={starSize} /> 
            </div>
        )
    }

    if (value < 5) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className={starSize} />
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starHalf} alt={starHalf} className={starSize} /> 
            </div>
        )
    }

    if (value === 5) {
        return (
            <div className="m-3 flex flex-row items-start justify-start space-x-1 mt-2">
                <img src={starFill} alt={starFill} className={starSize} />
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starFill} alt={starFill} className={starSize} /> 
                <img src={starFill} alt={starFill} className={starSize} /> 
            </div>
        )
    }

}

export default Star;

