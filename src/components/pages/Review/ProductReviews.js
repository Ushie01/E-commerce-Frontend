import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import Button from '../../Button';
import starFill from './../../../assets/star-fill.svg';
import arrow from './../../../assets/arrow.svg';
import starEmpty from './../../../assets/star.svg';
import person from './../../../assets/account.svg';


const ProductReviews = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-between border-b-2 p-5">
                <div className="flex flex-row">
                    <Link to="/">
                        <img src={arrow} alt={arrow} className="h-7 w-7" />
                    </Link>
                    <p className="text-xl font-bold ml-3">
                        3 Review
                    </p>
                </div>
            </div>

            <div className="flex flex-row items-start justify-start m-3 borde">
            <button className="m-3 h-20 text-3xl w-20 border-2 rounded-full">
                <img src={person} alt={person} className="w-12 h-12 m-auto" />
            </button>
            <div className="flex flex-col items-start justify-start mt-5 ml-3">
                <p className="font-bold text-2xl">Rekureku Judith</p>
                <div className="flex flex-row">
                <div className="flex flex-row">
                    <img src={starFill} alt={starFill} className="w-5 h-5" />
                    <img src={starFill} alt={starFill} className="w-5 h-5" />
                    <img src={starFill} alt={starFill} className="w-5 h-5" />
                    <img src={starFill} alt={starFill} className="w-5 h-5" />
                    <img src={starEmpty} alt={starEmpty} className="w-5 h-5" />
                </div>
                <p className="text-gray text-xs m-auto ml-3">December 10, 2022</p>
                </div>
            </div>
            </div>
            <p className="text-gray m-5 mb-12 ">
                air max are always very comfortable fit, clean and just perfect in
                every way. just the box was too small and scrunched the sneakers up a
                little bit, not sure if the box was always this small but the 90s are
                and will always be one of my favorites.
            </p>

            <div className='flex items-center justify-center'>
                <Link to="/WriteReview">
                    <Button
                        text="Write Review"
                    />
                </Link>
            </div>

            <Footer />
        </div>

            
            
    )
}

export default ProductReviews