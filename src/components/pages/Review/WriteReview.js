import { Toast } from '../../../Hooks/useToast';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';
import { userCreateReview } from '../../../helper/api';
import { validateCreateReview } from '../../../utils/validateInfo';
import arrow from './../../../assets/arrow.svg';
import Footer from '../../componentsItem/Footer';
import starFill from './../../../assets/star-fill.svg';
import starEmpty from './../../../assets/star.svg';


const WriteReview = () => {
    const { id } = useParams();
    const [err, setErr] = useState("");
    const [, setIsSubmitted] = useState(false);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const handleRating = (value) => { setRating(value) };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const values = { rating, review };
        setErr(validateCreateReview(values));
        if (e.key === 'Enter') {
            if (rating && review) {
                setIsSubmitted(true);
                const payload = await userCreateReview(values, id);
                if (payload.message) {
                    setIsSubmitted(false);
                    setErrMsg("You already placed a review on this product"); 
                    Toast({
                        text: 'Request failed!! 💥💥',
                        position: 'top-left',
                    });
                } else {
                    setIsSubmitted(false);
                    Toast({
                        text: 'Request successfull!! 🦅✨',
                        position: 'top-right',
                    });
                    setErr("");
                    setReview("");
                    setRating("")
                }
            }   
        }
    }
    
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
                Please write Overall level of satisfaction with your shipping / Delivery Service.
            </p>
                <div className="flex flex-row items-center">
                    <div className="grid grid-cols-5 gap-0 m-3 space-x-2">
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;
                            return (
                                <label key={ratingValue} >
                                <input
                                    type="radio"
                                    name="rating"
                                    value={ratingValue}
                                    onClick={() => handleRating(ratingValue)}
                                    className='hidden'
                                />
                                {ratingValue <= rating ? (
                                    <img src={starFill} alt={starFill} className="w-8 h-8" />
                                ) : (
                                    <img src={starEmpty} alt={starEmpty} className="w-8 h-8" />  
                                )}
                                </label>
                            );
                        })}
                    </div>
                    <p className='font-bold text-xl text-gray-500'>{`${rating}/5`}</p>
                </div>
                {err.rating && <p className='text-red-600 text-sm font-bold ml-3'>{err.rating}</p>}
                
                <div>
                    <ToastContainer />
                </div>
                
                <div className='m-3 mt-6 space-y-3'>
                    <p className='text-xl font-bold'>
                        Write Your Review
                    </p>
                    <textarea 
                        className='w-full h-48 border-2 rounded-md' 
                        placeholder='Write A Review'
                        onChange={(e) => setReview(e.target.value)}
                        onKeyUp={handleSubmit}
                        // disabled={isSubmitted}
                    >
                    </textarea>
                </div>
                {err.review && <p className='text-red-600 text-md font-bold ml-3'>{err.review}</p>}
                {errMsg && <p className='text-red-600 text-md font-bold ml-3'>{errMsg}</p>}
            <Footer />
        </div>
    )
}

export default WriteReview;