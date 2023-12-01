import React, { useContext } from "react";
import Usercontext from "../context/Usercontext";
import { StarFill } from "react-bootstrap-icons";
import Spinner from "../context/Spinner";
import Header from "./Header";

const Popular = () => {
  const { product, loading, handleAdditem, handleRemoveitem, cartitem } =
    useContext(Usercontext);

  return (
    <div>
      <Header />
      {loading ? (
        <Spinner />
      ) : (
        <div className="container bg-light px-4 px-lg-5 mt-5">
          <section className="py-5">
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 col-sm-12 justify-content-center">
              {product.map((item, index) => {
                if (item.rating.rate >= 4) {
                  return (
                    <div key={index} className="col mb-5">
                      <div className="card h-100">
                        {/* Product image*/}
                        <img
                          className="card-img-top p-3"
                          src={item.image}
                          width={200}
                          height={200}
                          alt=""
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
                                  <div key={i}>
                                    {item.rating ? <StarFill /> : ""}
                                  </div>
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
               }
              })}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Popular;
