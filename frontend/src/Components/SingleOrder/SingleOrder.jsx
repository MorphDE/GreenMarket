import { useState } from "react";
import "./SingleOrder.css";

const SingleOrder = ({ order }) => {
  const [toggle, setToggel] = useState(false);
  return (
    <section className="singleorder-container">
      {order?.map((singleOrder) => (
        <div key={singleOrder?._id} className="singleorder-card">
          <div className="singleorder-left">
            <h1>{singleOrder?._id?.slice(-6)}</h1>
            <p>{singleOrder?.totalAmount}€</p>
          </div>
          <div className="singleorder-right">
            <div className="singleorder-right-top">
              <p className="singleorder-status">{singleOrder?.orderStatus}</p>
              <p className="singleorder-pay">{singleOrder?.paymentStatus}</p>
            </div>
            <p className="order-date">
              {new Date(singleOrder?.createdAt).toLocaleString()}
            </p>
          </div>

          <p onClick={() => setToggel(!toggle)}>
            {toggle ? "show less" : "show more"}
          </p>
          <div className={toggle ? "order-products" : "hide-order-products"}>
            {singleOrder?.products?.map((productItem) => (
              <div key={productItem?._id} className="order-product-item">
                <h3>{productItem?.name}</h3>
                <p>Price: {productItem?.price}€</p>
                <p>Quantity: {productItem?.quantity}</p>
                <p>
                  Total Price: {productItem?.price * productItem?.quantity}€
                </p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SingleOrder;
