import React from 'react'
import { useContext } from 'react';
import Usercontext from '../context/Usercontext';
import Cartitem from './Cartitem';
import { Link } from 'react-router-dom';


const Cartpage = () => {
  const {cartitem,total} = useContext(Usercontext)
  return (
    <div>
    <section className="h-100 h-custom" style={{backgroundColor: '#d2c9ff'}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="card card-registration card-registration-2" style={{borderRadius: 15}}>
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-8">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                    </div>
                    <hr className="my-4" />
                    {
            cartitem.length > 0 ? <div className="modal-body">
                <ol className="list-group list-group-numbered">
            {
              cartitem.map((item,index)=>{
                 return <Cartitem item={item} key={index}/>
                 
              })
            }</ol>
            </div> : <h3 className="text-center">No items in cart</h3>
          }
                    <hr className="my-4" />
                    <div className="pt-5">
                      <h6 className="mb-0"><Link to={"/"}  className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Back to shop</Link></h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 bg-grey">
                  <div className="p-5">
                    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="text">ITEMS {cartitem.length} Nos</h5>
                      <h5>&#36;{Math.round(total)}</h5>
                    </div>
                    
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-5">
                      <h5 className="text-uppercase">Total price</h5>
                      <h5>&#36;{Math.round(total)}</h5>
                    </div>
                    <button type="button" className="btn btn-success btn-block btn-lg" data-mdb-ripple-color="dark">Proceed to buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Cartpage
