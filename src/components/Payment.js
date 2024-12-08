import React from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';

// Load Stripe public key
const stripePromise = loadStripe('your-public-key-here'); // Replace with your actual Stripe public key

const PaymentPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const planName = queryParams.get('plan') || 'Mental Health Plan';

    return (
        <div style={{ padding: '20px' }}>
            <h2>Subscribe to {planName}</h2>
            <p>Complete your subscription to access this plan.</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm planName={planName} />
            </Elements>
        </div>
    );
};

export default PaymentPage;
