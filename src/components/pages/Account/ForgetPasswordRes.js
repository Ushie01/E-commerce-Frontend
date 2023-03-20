import Navbar2 from "../../componentsItem/Navbar2";
import ScreenMsgPage from "../Explore/ScreenMsgPage";
import check from "./../../../assets/check-lg.svg";
import arrow from "./../../../assets/arrow.svg";

const ForgetPassword = () => {
    return (
      <>
        <Navbar2 
            linkRoute={'/'}
            image={arrow}
        />
        <div className="p-4 text-center mt-24">
            <ScreenMsgPage
                image={check}
                res={"Check your mail"}
            />
            <h1 className="font-bold mt-4">Follow the link send to your email to create new password</h1>
        </div>
      </>
    );
}

export default ForgetPassword;