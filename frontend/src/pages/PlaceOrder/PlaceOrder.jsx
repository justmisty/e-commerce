import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getCartTotal } = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className='order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
        </div>
        <input type='email' placeholder='Email address' />
        <input type='street' placeholder='Street' />
        <div className='multi-fields'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='Zip code' />
          <input type='text' placeholder='Country' />
        </div>
        <input type='text' placeholder='Phone' />
      </div>
      <div className='order-right'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getCartTotal()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getCartTotal() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>${getCartTotal() === 0 ? 0 : +2}</b>
            </div>
          </div>
          <butto className='proceed'>PROCEED TO CHECKOUT</butto>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
