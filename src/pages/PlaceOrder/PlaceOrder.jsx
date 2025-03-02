import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>

          <input type="email" placeholder='Email Address' />
          <input type="text"  placeholder='Address' />

        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State / Province' />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='Postal / Zip Code' />
          <input type="text" placeholder='Country' />
        </div>

        <input type="text" placeholder='Phone Number' />

      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>All Orders</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₱{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Service Charge</p>
              <p>₱{getTotalCartAmount() === 0?0:30}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₱{getTotalCartAmount() === 0?0:getTotalCartAmount()+30}</b>
            </div>
          </div>
          <button>Proceed to Payment</button>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder
