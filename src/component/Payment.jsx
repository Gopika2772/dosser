import React, { useState } from 'react';
import styled from 'styled-components';

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const PaymentRadio = styled.input.attrs({ type: 'radio' })`
  margin-right: 0.5rem;
  appearance: none;
  border: 2px solid #0BDA51;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  outline: none;
  &:checked {
    background-color: #0BDA51;
  }
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const PaymentInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  border-bottom: 2px solid #0BDA51;
  outline: none;
`;

const PaymentButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PaymentButton = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #0BDA51;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #09A844;
  }
`;

const PaymentCancelButton = styled(PaymentButton)`
  background-color: #E84646;
  &:hover {
    background-color: #C73D3D;
  }
`;

const PaymentCardAddButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit');
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
    setShowPaymentForm(false);
  };

  const handlePaymentFormSubmit = (event) => {
    event.preventDefault();
    // Send payment form data to server
    setShowPaymentForm(false);
    setCardNumber('');
    setCardName('');
    setExpiryDate('');
    setCvv('');
  };

  const renderPaymentForm = () => {
    if (showPaymentForm) {
      return (
        <PaymentForm onSubmit={handlePaymentFormSubmit}>
          <PaymentInput
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
            required
          />
          <PaymentInput
            type="text"
            placeholder="Name on Card"
            value={cardName}
            onChange={(event) => setCardName(event.target.value)}
            required
            />
               <PaymentInput
            type="text"
            placeholder="Expiry Date"
            value={cardName}
            onChange={(event) => setExpiryDate(event.target.value)}
            required
            />
               <PaymentInput
            type="text"
            placeholder="Cvv"
            value={cardName}
            onChange={(event) => setCvv(event.target.value)}
            required
            />
            </PaymentForm>
            );
      }
    }
}

export default Payment


