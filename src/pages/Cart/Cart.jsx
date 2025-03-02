import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p> {/*For Add to cart*/}
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{ {/*If item is clicked it display in add to cart*/}
          if(cartItems[item._id]>0)
          {
            return(
              <div>
                 <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p> 
                  <p>₱{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₱{item.price*cartItems[item._id]}</p>
                  <button onClick={()=> removeFromCart(item._id)} className='cancel'>Cancel</button>
                 </div> 
                 <hr />
              </div>
            )
          }
        })} {/*It display the whole name of item*/}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
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
          <button onClick={()=>navigate('/order')}>PLACE ORDER</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
