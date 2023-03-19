import Navbar2 from "../../componentsItem/Navbar2";
import ScreenMsgPage from "../Explore/ScreenMsgPage";
import arrow from "./../../../assets/arrow.svg";
import image from "./../../../assets/x.svg";

const Notification = () => {
    return (
        <div>
            <Navbar2 text={"Notification"} image={arrow} linkRoute="/"/>
            <div className="mt-32">
                <ScreenMsgPage
                    image={image}
                    res='You have no notification yet'
                />
            </div>
        </div>
    )
}

export default Notification;