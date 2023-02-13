import { Link } from 'react-router-dom';
import ResponseMsg from './../Explore/ScreenMsgPage';
import check from './../../../assets/check-lg.svg';


const SuccessMsg = () => {
    return (
      <>
        <div className="mt-44">
          <Link to="/Account/Order">
            <ResponseMsg
              res="Success"
              image={check}
              direction="Back To Order"
            />
          </Link>
        </div>
      </>
    );
}

export default SuccessMsg;

