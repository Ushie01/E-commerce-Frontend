import Star from '../../componentsItem/star';
import person from './../../../assets/account.svg';


const Review = ({productValue, value}) => {
    const productValueDate = new Date(`
        ${productValue?.reviews[0]?.createdAt.split("T")[0]}
    `);
    <>
        <div className="flex flex-row items-start justify-start m-3">
            <button className="m-3 h-20 text-3xl w-20 border-2 rounded-full">
                <img src={person} alt={person} className="w-12 h-12 m-auto" />
            </button>
            <div className="flex flex-col items-start justify-start mt-5 ml-3">
                <p className="font-bold text-2xl">{productValue?.reviews[0]?.user?.name}</p>
                <div className="flex flex-row">
                    <div className="flex flex-row">
                        <Star value={value} />
                    </div>
                    <p className="text-gray text-xs m-auto ml-3">{`
                        ${productValueDate.toLocaleString('default', { month: 'long' })} 
                        ${productValueDate.getDate()}, 
                        ${productValueDate.getFullYear()}
                    `}
                    </p>
                </div>
            </div>
        </div>
        <p className="text-gray m-3 ">{productValue?.reviews[0]?.review}</p>
    </>
}

export default Review