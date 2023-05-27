# Introduction to react
- What is React used For?
- React setup/Installation.
- Folder Structure



- Components

```js

import "./index.css";

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

```

- Introduction to JSX

```js
import "./index.css";

const img = "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
const price = "$ 22.3";
const title = "Mens Casual Premium Slim Fit T-Shirts";

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
      <img className="avatar" src={img} alt={title} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default ProductList;

```
- props: passing properties dynamically from parent component to child component

```js

import "./index.css";

const img =
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
const price = "$ 22.3";
const title = "Mens Casual Premium Slim Fit T-Shirts";

const ProductList = () => {
  return (
    <div className="productlist">
      <Product img={img} price={price} title={title} />
      <Product img={img} price={price} title={title} />
      <Product img={img} price={price} title={title} />
      <Product img={img} price={price} title={title} />
      <Product img={img} price={price} title={title} />
    </div>
  );
};

const Product = (props) => {
  console.log(props)
  return (
    <div className="product">
      <img className="avatar" src={props.img} alt={props.title} />
      <h2 className="price">{props.price}</h2>
      <h2 className="title">{props.title}</h2>
    </div>
  );
};

export default ProductList;

```

- props: setting up dynamic data with multiple object

```js


const firstProduct = {
  img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  price: 22.3,
  title: "Mens Casual Premium Slim Fit T-Shirts",
};
const secondProduct = {
  img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 109.95,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
};
const thirdProduct = {
  img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  price: 55.99,
  title: "Mens Cotton Jacket",
};
const fourthProduct = {
  img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  price: 15.99,
  title: "Mens Casual Slim Fit",
};
const fifthProduct = {
  img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  price: 695,
  title:
    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
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
      <Product
        img={fourthProduct.img}
        price={fourthProduct.price}
        title={fourthProduct.title}
      />
      <Product
        img={fifthProduct.img}
        price={fifthProduct.price}
        title={fifthProduct.title}
      />
    </div>
  );
};

const Product = (props) => {
  return (
    <div className="product">
      <img className="avatar" src={props.img} alt={props.title} />
      <h2 className="price">{props.price}</h2>
      <h2 className="title">{props.title}</h2>
    </div>
  );
};

export default ProductList;


```

- Destructuring props

```js

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
    </div>
  );
};

const Product = (props) => {
  const {img, price, title} = props
  return (
    <div className="product">
      <img className="avatar" src={img} alt={title} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default ProductList;

```

- Destructure in function parameter

```js

const Product = ({img, price, title}) => {
  return (
    <div className="product">
      <img className="avatar" src={img} alt={title} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
    </div>
  );
};
```

- Children props: `children` is a special props in react. 
  It allows access to everything we render between component
  tags or anything render between component tags.

```js
const ProductList = () => {
  return (
    <div className="productlist">
      <Product
        img={firstProduct.img}
        price={firstProduct.price}
        title={firstProduct.title}
      >
        {/* children */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem
          saepe, eos accusantium suscipit minus.
        </p>
        <button>Buy Now</button>
        {/* children */}
      </Product>

      <Product
        img={secondProduct.img}
        price={secondProduct.price}
        title={secondProduct.title}
      />
    </div>
  );
};

const Product = ({ img, price, title, children }) => {
  return (
    <div className="product">
      <img className="avatar" src={img} alt={title} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
};

```

- Getting data from an array of object

```js
const products = [
  {
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: 22.3,
    title: "Mens Casual Premium Slim Fit T-Shirts",
  },
  {
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
  {
    img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 55.99,
    title: "Mens Cotton Jacket",
  },
  {
    img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    price: 15.99,
    title: "Mens Casual Slim Fit",
  },
  {
    img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    price: 695,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  },
];

const ProductList = () => {
  return (
    <div className="productlist">
      {products.map((product) => {
        const { img, price, title } = product;
        return <Product img={img} price={price} title={title} />;
      })}
    </div>
  );
};

const Product = (props) => {
  const { img, price, title } = props;
  console.log(props);
  return (
    <div className="product">
      <img className="avatar" src={img} alt={title} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
    </div>
  );
};

```

- Key props

```js
const ProductList = () => {
  return (
    <div className="productlist">
      {products.map((product, id) => {
        const { img, price, title } = product;
        return <Product img={img} price={price} title={title} key={id} />;
      })}
    </div>
  );
};

const Product = (props) => {
  const { img, price, title } = props;
  // console.log(props);
  return (
    <div className="product">
      <img className="avatar" src={img} alt={title} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
    </div>
  );
};
```

- passing the entire `product` object

```js
const ProductList = () => {
  return (
    <div className="productlist">
      {products.map((product, id) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

const Product = (props) => {
  const { img, price, title } = props.product;
  console.log(props);
  return (
    <div className="product">
      <img className="avatar" src={img} alt={title} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
    </div>
  );
};
```