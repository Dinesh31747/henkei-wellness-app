import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = ({ planName }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setLoading(true);
        setMessage('');

        const response = await fetch('http://localhost:5000/api/upi-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                amount: 4999, // Example amount in paise (₹49.99)
                currency: 'inr', // 'usd' for USD or 'inr' for Indian Rupees
                description: planName,
            }),
        });

        const { clientSecret } = await response.json();

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        setLoading(false);

        if (error) {
            setMessage(`Payment failed: ${error.message}`);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            setMessage('Payment successful! Thank you for subscribing.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h3>Plan: {planName}</h3>
            <p>Price: ₹49.99</p>
            <CardElement />
            <button type="submit" disabled={!stripe || loading} style={{ marginTop: '20px' }}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
            {message && <p style={{ marginTop: '10px', color: message.includes('failed') ? 'red' : 'green' }}>{message}</p>}
        </form>
    );
};

export default CheckoutForm;
