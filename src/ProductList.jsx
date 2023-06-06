import "./index.css";
import { products } from "./products";
import Product from "./Product";


const ProductList = () => {
  return (
    <div className="productlist">
      {products.map((product, index) => {
        return <Product {...product} key={product.id} number={index} />;
      })}
    </div>
  );
};


export default ProductList;
