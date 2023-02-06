import starEmpty from './../../../assets/star.svg';
import starHalf from './../../../assets/star-half.svg';
import starFill from './../../../assets/star-fill.svg';
import deleteSvg from './../../../assets/delete.svg';


const SaleSection = ({ men, picture, amount, category, price, discount, star, deleteBin }) => {
    return (
      <>
        <div className="flex flex-row m-3 items-center justify-center space-x-2 overflow-x-auto scrollbar-hide category">
          {men.map((man, index) => (
            <div className="border-2 p-1 rounded-md" key={index}>
              <div className="h-72 w-44 mt-3">
                <div className="h-40 w-40 m-auto">
                  <img src={picture} alt={picture} />
                </div>
                <h3 className="m-2 font-extrabold break-all">{category}</h3>
                    {
                        star === true
                            ?  
                            <div className="m-2 flex flex-row items-start justify-start">
                                <img src={starFill} alt={starFill} className="w-4 h-4" />
                                <img src={starFill} alt={starFill} className="w-4 h-4" />
                                <img src={starFill} alt={starFill} className="w-4 h-4" />
                                <img src={starHalf} alt={starHalf} className="w-4 h-4" />
                                <img src={starEmpty} alt={starEmpty} className="w-4 h-4" />
                            </div>
                            :
                            ""
                    }

                <h3 className="m-2 font-extrabold break-all textColor">
                  {price}
                </h3>
                <div className="flex flex-row m-2 items-start justify-between">
                    <s className="text-gray-500 text-sm">{amount}</s>
                    <h2 className="font-red text-sm font-bold text-red-700 text-extrabold">
                        {discount}
                    </h2>
                    {
                        deleteBin === true
                        ?
                        <img src={deleteSvg} alt={deleteSvg} className="w-6 h-6"/>
                        :
                        ""          
                    }
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
}

export default SaleSection;