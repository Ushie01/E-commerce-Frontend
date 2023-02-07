import { Link } from 'react-router-dom';
import arrow from './../../../assets/arrow.svg';
import starEmpty from './../../../assets/star.svg';
import starFill from './../../../assets/star-fill.svg';


const WriteReview = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-between border-b-2 p-5">
                <div className="flex flex-row">
                    <Link to="/ProductReviews">
                        <img src={arrow} alt={arrow} className="h-7 w-7" />
                    </Link>
                    <p className="text-xl font-bold ml-3">
                        Write Review
                    </p>
                </div>
            </div>
            <p className='text-xl font-bold m-3'>
                Please write Overall level of satisfaction with your shipping / Delivery Service
            </p>
            <div className="flex flex-row space-x-3 items-center m-3 mt-6">
                <img src={starFill} alt={starFill} className="w-8 h-8" />
                <img src={starFill} alt={starFill} className="w-8 h-8" />
                <img src={starFill} alt={starFill} className="w-8 h-8" />
                <img src={starFill} alt={starFill} className="w-8 h-8" />
                <img src={starEmpty} alt={starEmpty} className="w-8 h-8" />
                <p className='font-bold text-xl text-gray-500'>4/5</p>
            </div>
            <div className='m-3 mt-6 space-y-3'>
                <p className='text-xl font-bold'>
                    Write Your Review
                </p>
                <textarea className='w-full h-48 border-2 rounded-md' placeholder='Write A Review'></textarea>
            </div>
        </div>
    )
}

export default WriteReview;