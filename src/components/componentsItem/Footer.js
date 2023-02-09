import account from "./../../assets/account.svg";
import cart from "./../../assets/cart.svg";
import explore from "./../../assets/explore.svg";
import home from "./../../assets/home.svg";
import offer from "./../../assets/offer.svg";


const footer = [
    {
        item: home,
        name: "Home"
    },
    {
        item: explore,
        name: "Explore"
    },
    {
        item: cart,
        name: "Cart"
    },
    {
        item: offer,
        name: "Offer"
    },
    {
        item: account,
        name: "Account"
    }
]

const Footer = () => {
    return (
      <div className="flex flex-row space-x-2 h-20 w-full p-3 items-center justify-between bg-white fixed left-0 right-0 bottom-0 border-t-2">
        {footer.map((foot, value) => (
          <div className="text-center" key={value}>
            <button>
              <img src={foot.item} alt={foot.item} className="h-8 w-8" />
            </button>
            <p className="font-bold text-sm">{foot.name}</p>
          </div>
        ))}
      </div>
    );
}

export default Footer;