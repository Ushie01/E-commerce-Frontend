import { useState, useEffect } from "react";
import { getAllReview } from "../../../helper/api";
import Loader from "../../componentsItem/Loading/Loader";

const UserReviews = () => {
    const [reviews, setReviews] = useState([]);

    const allReviews = async () => {
        const res = await getAllReview();
        setReviews(res.data.data);
    }

    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    console.log(reviews)

    useEffect(() => {
        allReviews()
    }, []);

    return (
        <div className="p-3">
            <div className='flex flex-row items-center justify-between'>
                <p className='text-2xl font-bold mt-3'>Reviews:</p>
            </div>
			<div className='overflow-x-auto mt-3'>
                <table>
                    <thead>
                        <tr>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                No.
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                ReviewId
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                Ratings
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                Reviews
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                Products
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                Created At
                            </th>
                            <th className='p-5 bg-gray-200 border-spacing-2 border border-white'>
                                User
                            </th>
                        </tr> 
                    </thead>
                    { reviews &&
                        reviews.map((review, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td className='p-2 bg-slate-200 border-spacing-2 border border-white'>
                                        {index + 1}
                                    </td>
                                    <td className='p-2 bg-slate-100 border-spacing-2 border border-white'>
                                        {review._id}
                                    </td>
                                   <td className='p-2 bg-slate-100 border-spacing-2 border border-white'>
                                        {review.rating}
                                    </td>
                                    <td className='p-2 bg-slate-100 border-spacing-2 border border-white'>
                                        {review.review}
                                    </td>
                                    <td className='p-2 bg-slate-100 border-spacing-2 border border-white'>
                                        {review.product}
                                    </td>
                                    <td className='p-2 bg-slate-100 border-spacing-2 border border-white'>
                                        {new Date(
                                           review?.createdAt.split('T')[0]
                                        ).toLocaleDateString('en-US', options)}
                                    </td>
                                    <td className='p-2 bg-slate-100 border-spacing-2 border border-white'>
                                        {review?.user?._id}
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
				{!reviews && <Loader />}
            </div>
        </div>
    )
}

export default UserReviews;