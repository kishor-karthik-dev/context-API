import React, { useContext } from "react";
import Header from "./Header";
import Product from "./Product";
import "bootstrap/dist/css/bootstrap.min.css";
import Usercontext, { } from "../context/Usercontext";
import Spinner from "../context/Spinner";

const Allproducts = () => {
  const { loading } = useContext(Usercontext);
  return (
    <>
      <Header/>
    <div className="container bg-light px-4 px-lg-5 mt-5">
      <section className="py-5">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 col-sm-12 justify-content-center">
          {/* <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 col-sm-12 justify-content-center"> */}
            {loading ? <Spinner /> : <Product />}
          </div>
        {/* </div> */}
     
      </section>
      </div>
    </>
  );
};

export default Allproducts;
