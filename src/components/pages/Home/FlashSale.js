import { useAllProduct } from '../../../Hooks/useProduct';
import Navbar2 from '../../componentsItem/Navbar2';
import CarouselComponent from '../../Carousel/CarouselComponent';
import SaleSection from './SaleSection';
import Footer from "../../componentsItem/Footer";
import arrow from '../../../assets/arrow.svg';
import love from '../../../assets/love.svg';
import search from '../../../assets/search_.svg';


const FlashSale = () => {
  const product = useAllProduct();
  const productImage = product.product?.data.products.slice(0, 4).reverse().map((value) => value?.productGallery[1]);

    return (
      <div className="mb-20">
        <Navbar2
          text={"Flash Sale"}
          image={arrow}
          secondImage={love}
          linkRoute={'/'}
          thirdImage={search}
        />
        <CarouselComponent
          value={true}
          mapCarosel={true}
          circleClick={true}
          image={productImage}
        />
        <SaleSection
            products={
              product
              .product
              ?.data
              .products
              .reverse()
            }
            star={true}
            deleteBin={false}
            column={true}
        />
        <Footer />
      </div>
    );
}

export default FlashSale;
