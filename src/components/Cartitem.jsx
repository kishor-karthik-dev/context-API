import React, { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";

const Cartitem = ({ item }) => {
  const { handleChange, handleRemoveitem } = useContext(Usercontext);
  const [des, setDes] = useState(false);
  const handledes = () => {
    setDes(!des);
  };

  return (
    <div>
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src={item.image}
            className="img-fluid rounded-3"
            alt="Cotton T-shirt"
          />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-black mb-0">{item.title}</h6>
          <div>
            <h6>Description :</h6>
            <small>
              {des ? item.description : `${item.description.slice(0, 50)}`}
            </small>
           <div>
           {!des && (
              <button
                style={{ font: "12px" }}
                className="btn m-1 p-0"
                onClick={handledes}
              >
                Show more....
              </button>
            )}
            {des && (
              <button
                style={{ font: "2px" }}
                className="btn m-0 p-0"
                onClick={handledes}
              >
                Show less....
              </button>
            )}
           </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button
            className={`btn btn-danger px-2 ${
              item.quantity === 1 ? "disabled" : ""
            }`}
            onClick={() => handleChange(item, -1)}
          >
            -
          </button>
          <span>&nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;</span>
         
          <button
            className="btn btn-success px-2"
            onClick={() => handleChange(item, +1)}
          >
            +
          </button>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0">&#36; {Math.round(item.price)}</h6>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <button
            className="btn btn-danger"
            onClick={() => handleRemoveitem(item)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
