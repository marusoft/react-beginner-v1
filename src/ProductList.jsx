import "./App.css";

const ProductList = () => {
  return (
    <div className="productlist">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

const Product = () => {
  return (
    <div className="product">
      <Image />
      <ProductPrice />
      <ProductTitle />
    </div>
  );
};

const Image = () => (
  <img className="avatar"
    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    alt="men's clothing"
  />
);

const ProductPrice = () => {
  return <h2 className="price">$ 22.3</h2>;
};

const ProductTitle = () => {
  return <h2 className="title">Mens Casual Premium Slim Fit T-Shirts</h2>;
};

export default ProductList;
