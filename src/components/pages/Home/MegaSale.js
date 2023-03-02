import { useAllProduct } from '../../../Hooks/useProduct';
import Navbar2 from '../../componentsItem/Navbar2';
import SaleSection from './SaleSection';
import Footer from '../../componentsItem/Footer';
import arrow from '../../../assets/arrow.svg';


const MegaSale = () => {
  const product = useAllProduct();
    return (
      <div className='h-max mb-20'>
        <Navbar2
          text={"Mega Sale"}
          image={arrow}
          linkRoute="/"
        />
        <SaleSection
          products={
              product
              .product
              ?.data
              .products
              .sort((a, b) => b.price - a.price)
              .slice(0, 5)
          }
          star={false}
          deleteBin={false}
          column={true}
        />
        <Footer />
      </div>
    );
}

export default MegaSale;
