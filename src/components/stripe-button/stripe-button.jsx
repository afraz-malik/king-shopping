import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IorcjHi1sHpYjVtYW88IFhEZ0jTg91PlKPNi1QCsKL8PIaDfdppGFOdjIC8JJzh5SMIa74VH2bQpH9OwXJUTv9f00xHyfkTFS'
    
    const onToken = (token) =>{
            alert('Payment Success')
    }
    
    return(
        <StripeCheckout
        label='Pay Now'
        name = 'King Shopping Ltd'
        billingAddress
        shippingAddress
        image= ''
        description = {`Your Total is : ${price}$`}
        amount = {priceForStripe}   
        panelLabel= 'Pay Now'
        token={onToken} 
        stripeKey={publishableKey}    
        />
    )
}

export default StripeCheckoutButton;