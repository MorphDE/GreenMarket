import ProductCard from "../ProductCard/ProductCard";
import "./TopDeals.css";

const TopDeals = () => {
  const { products, setProducts } = useContext(ProductContext);

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/products/getAllProducts`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="topdeals-container">
      <h1>All Products</h1>
      {products.map((item, index) => (
        <div key={index} className="product-cards">
          <ProductCard
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
          />
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      ))}
    </section>
  );
};

export default TopDeals;
