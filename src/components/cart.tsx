import '../style/cart.css';

const Cart = () => {
  function test() {

  }

  return (
    <div className="cart-parent">
      <div className="cart-container">
        <p>Item1</p>
        <p>Rp 312311</p>
        <div className="cart-button-container">
          <div className="cart-button" onClick={test()}>-</div>
          <div className="cart-button">4</div>
          <div className="cart-button" onClick={test()}>+</div>
        </div>
      </div>
    </div>
  )
}

export default Cart;