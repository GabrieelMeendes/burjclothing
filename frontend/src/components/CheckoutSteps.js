import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''} >Acessar</div>
    <div className={props.step2 ? 'active' : ''} >Entrega</div>
    <div className={props.step3 ? 'active' : ''} >Pagamento</div>
    <div className={props.step4 ? 'active' : ''} >Compra</div>
  </div>
}

export default CheckoutSteps;