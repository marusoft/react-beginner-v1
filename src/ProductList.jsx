import "./index.css";


const products = [
  {
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: 22.9,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    altText: "men's clothing",
  },
  {
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 100.9,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    altText: "men's clothing",
  },
  {
    img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 109.9,
    title: "Mens Cotton Jacket",
    altText: "men's clothing",
  },
];


const ProductList = () => {
  return (
    <div className="productlist">
      {products.map((product) => {
        return <Product product={product} />
      })}     
    </div>
  );
};

const Product = (props) => {
  console.log("PROPS", props);
  const {img, price,  title, altText} = props.product
  return (
    <div className="product">
      <img className="avatar" src={img} alt={altText} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
    </div>
  );
};


export default ProductList;
