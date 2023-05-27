import "./index.css";

const firstProduct = {
  img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  price: 29.5,
  title: "Mens Casual Premium Slim Fit T-Shirts",
};

const secondProduct = {
  img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 9.5,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
};

const thirdProduct = {
  img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  price: 15.5,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
};

const ProductList = () => {
  return (
    <div className="productlist">
      <Product
        img={firstProduct.img}
        price={firstProduct.price}
        title={firstProduct.title}
      />
      <Product
        img={secondProduct.img}
        price={secondProduct.price}
        title={secondProduct.title}
      />
      <Product
        img={thirdProduct.img}
        price={thirdProduct.price}
        title={thirdProduct.title}
      />
    </div>
  );
};

const Product = (props) => {
  const {img, price, title} = props
  console.log("PROPS", props);
  return (
    <div className="product">
      <img className="avatar" src={img} alt="men's clothing" />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default ProductList;
