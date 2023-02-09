import ResponseMsg from './../Explore/ScreenMsgPage';
import check from './../../../assets/check-lg.svg';


const SuccessMsg = () => {
    return (
      <>
        <div className="mt-44">
          <ResponseMsg res="Success" image={check} direction="Back To Order" />
        </div>
      </>
    );
}

export default SuccessMsg;

