import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrum/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Component/RelatedProducts/RelatedProducts';
import Cart from './Cart';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
        <RelatedProducts />
       <Cart/>
    </div>
  );
}

export default Product;