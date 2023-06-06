const Product = (props) => {
  // console.log("PROPS", props);
  const { img, price, title, altText, number } = props;
  // console.log(number);
  return (
    <div className="product">
      <img className="avatar" src={img} alt={altText} />
      <h2 className="price">{price}</h2>
      <h2 className="title">{title}</h2>

      <span className="number">{number + 1}</span>
    </div>
  );
};

export default Product;
