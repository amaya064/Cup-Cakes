// controllers/payment.controller.js
import Payment from '../models/payment.model.js';

export const processPayment = async (req, res) => {
  try {
    // Destructure data from the request body
    const {
      firstName,
      lastName,
      address,
      phone,
      email,
      cartItems,
      totalPrice,
      cardNumber,
      expiryDate,
      cvv,
    } = req.body;

    // Create a new payment entry
    const newPayment = new Payment({
      firstName,
      lastName,
      address,
      phone,
      email,
      cartItems,
      totalPrice,
      cardNumber,
      expiryDate,
      cvv,
    });

    // Save the payment to the database
    await newPayment.save();

    // Respond with a success message
    res.status(201).json({
      message: 'Payment processed successfully!',
      payment: newPayment,
    });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ message: 'Error processing payment', error });
  }
};
