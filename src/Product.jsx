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