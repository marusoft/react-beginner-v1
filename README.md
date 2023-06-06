# Introduction to react
- What is [React](https://create-react-app.dev/) used For?
  
  A JavaScript library for building user interfaces.

- React setup/Installation.
  
  `npx create-react-app folderName`

  or

  `yarn create react-app my-app`
  
- Folder Structure



- Components 
  
  `<Component />`

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

- Using spread operator to pass data.

```js
const ProductList = () => {
  return (
    <div className="productlist">
      {products.map((product) => {
        return <Product {...product} key={product.id} />;
      })}
    </div>
  );
};

const Product = (props) => {
  console.log("PROPS", props);
  const { img, price, title, altText } = props;
  return (
    <div className="product">
      <img className="avatar" src={img} alt={altText} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default ProductList;
```

- passing function as props/data

```js

const ProductList = () => {
  const someValue = "Excited";
  const displaySomething = () => {
    console.log(someValue);
  };

  return (
    <div className="productlist">
      {products.map((product) => {
        return (
          <Product
            {...product}
            key={product.id}
            displaySomething={displaySomething}
          />
        );
      })}
    </div>
  );
};

const Product = (props) => {
  // console.log("PROPS", props);
  const { img, price, title, altText, displaySomething } = props;
  const showTitleOnClick = () => {
    console.log(title);
  };

  return (
    <div className="product">
      <img className="avatar" src={img} alt={altText} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
      <button onClick={showTitleOnClick}>Show Title</button>
      <button onClick={displaySomething}>Click me</button>
    </div>
  );
};

export default ProductList;
```

- Event in React
   - `onChange` 
   - `onClick` 
   - `onSubmit`

```js
const handleFormInput = (e) => {
  console.log(e);
  console.log(e.target.value);
  console.log(e.target.name);
  // console.log("handle form input");
};

const handleButtonClick = () => {
  alert("handle button click");
};

const handleFormSubmission = (e) => {
  e.preventDefault();
  console.log("handle form submission")
}

const EventInReact = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <form onSubmit={handleFormSubmission}>
        <h2>Form in React</h2>
        <input
          type="text"
          name="eventExample"
          // value={"myValue"}
          placeholder="enter something"
          style={{ margin: "1rem 0", padding: ".5rem" }}
          onChange={handleFormInput}
        />
      </form>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

```

- Get a single product (method 1)
  
```js
const products = [
  {
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: 22.9,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    altText: "men's clothing",
    id: 1,
  },
  {
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 100.9,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    altText: "men's clothing",
    id: 2,
  },
  {
    img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 109.9,
    title: "Mens Cotton Jacket",
    altText: "men's clothing",
    id: 3,
  },
];

const ProductList = () => {
  const getProduct = (id) => {
    const findProduct = products.find((product) => product.id === id);
    console.log(findProduct);
  };

  return (
    <div className="productlist">
      {products.map((product) => {
        return (
          <Product {...product} key={product.id} getProduct={getProduct} />
        );
      })}
    </div>
  );
};

const Product = (props) => {
  // console.log("PROPS", props);
  const { img, price, title, altText, id, getProduct } = props;

  const getSingleProduct = () => {
    getProduct(id);
  };

  return (
    <div className="product">
      <img className="avatar" src={img} alt={altText} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
      <button onClick={getSingleProduct}>Get product</button>
    </div>
  );
};

export default ProductList;
```

- Get a single Product (method 2)

```js
const ProductList = () => {
  const getProduct = (id) => {
    const findProduct = products.find((product) => product.id === id);
    console.log(findProduct);
  };

  return (
    <div className="productlist">
      {products.map((product) => {
        return (
          <Product {...product} key={product.id} getProduct={getProduct} />
        );
      })}
    </div>
  );
};

const Product = (props) => {
  // console.log("PROPS", props);
  const { img, price, title, altText, id, getProduct } = props;

  const getSingleProduct = () => {
    getProduct(id);
  };

  return (
    <div className="product">
      <img className="avatar" src={img} alt={altText} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
      <button onClick={() => getProduct(id)}>Get product</button>
    </div>
  );
};

export default ProductList;
```

- Using `import`  and `export` statements to split components/data into multiple files
  
- `product.jsx`

```js
export const products = [
  {
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: 22.9,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    altText: "men's clothing",
    id: 1,
  },
  {
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 100.9,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    altText: "men's clothing",
    id: 2,
  },
  {
    img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 109.9,
    title: "Mens Cotton Jacket",
    altText: "men's clothing",
    id: 3,
  },
];

```

- `Product.jsx`

```js
const Product = (props) => {
  // console.log("PROPS", props);
  const { img, price, title, altText } = props;

  return (
    <div className="product">
      <img className="avatar" src={img} alt={altText} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default Product;
```

- `ProductList.jsx`

```js
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

```

- How to setup local Images in `src` folder in React app for optimization
