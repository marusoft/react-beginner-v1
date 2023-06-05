import "./index.css";
import { products } from "./products";
import Product from "./Product";


const ProductList = () => {
  return (
    <div className="productlist">
      {products.map((product) => {
        return <Product {...product} key={product.id} />;
      })}
    </div>
  );
};


export default ProductList;
