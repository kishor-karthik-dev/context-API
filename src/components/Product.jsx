import React from "react";

import { StarFill } from "react-bootstrap-icons";
import { useContext } from "react";
import Usercontext from "../context/Usercontext";

const Product = () => {
  const { product, handleAdditem, handleRemoveitem, cartitem } =
    useContext(Usercontext);

  // const isincart = () =>
  //   product && cartitem.some((item) => item.id === product.id);
  // const handleclick = () =>
  //   isincart() ? handleRemoveitem(product) : handleAdditem(product);

  return (
    <>
      {product.map((item, index) => {
        return (
          <div key={index} className="col mb-5">
            <div className="card h-100">
             
              <img
                className="card-img-top p-3"
                src={item.image}
                width={200}
                height={200}
                alt='product_image'
              />
              {/* Product details*/}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* Product name*/}
                  <h5 className="fw-bolder">{item.title}</h5>
                  {/* Product reviews*/}
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    {Array.from(
                      { length: Math.round(item.rating.rate) },
                      (_, i) => (
                        <div key={i}>{item.rating ? <StarFill /> : ""}</div>
                      )
                    )}
                  </div>
                  {/* Product price*/}
                  &#36; {Math.round(item.price)}
                </div>
              </div>
              {/* Product actions*/}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {cartitem.some((s) => item.id === s.id) ? (
                    <button
                      onClick={() => handleRemoveitem(item)}
                      className="btn btn-danger mt-auto"
                    >
                      Remove from cart
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAdditem(item)}
                      className="btn btn-success mt-auto"
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
