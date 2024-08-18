const stripe = require('stripe')('STRIPE_SECRET_KEY');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

// Connect to MongoDB
// const uri = 'mongodb+srv://abhilogin001:22423456@cluster0.iezigrj.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function storePaymentInfo(paymentToken, userId) {
    try {
        // Retrieve payment information from Stripe using token
        const paymentInfo = await stripe.tokens.retrieve(paymentToken);

        // Hash sensitive data before storing
        const hashedCardNumber = await bcrypt.hash(paymentInfo.card.number, 10);
        const hashedCVC = await bcrypt.hash(paymentInfo.card.cvc, 10);

        // Store tokenized payment information in MongoDB
        await client.connect();
        const database = client.db('food-del');
        const collection = database.collection('payment');
        await collection.insertOne({
            userId: userId,
            cardNumber: hashedCardNumber,
            cvc: hashedCVC,
            // Other payment information you want to store
        });

        console.log('Payment information stored successfully.');
    } catch (error) {
        console.error('Error storing payment information:', error);
    } finally {
        await client.close();
    }
}

// Example usage
const paymentToken = 'STRIPE_SECRET_KEY';
const userId = 'user_id';
storePaymentInfo(paymentToken, userId);
