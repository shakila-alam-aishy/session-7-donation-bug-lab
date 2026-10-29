const express = require('express');
const app = express();
const PORT = 3000;

// INTENTIONAL SECURITY BUG: Hardcoded Secret Key
const STRIPE_SECRET_KEY = "sk_test_51MzFakeKeyNeverCommitSecrets1234567890ABCDEF";

app.use(express.json());
app.use(express.static('public'));

app.post('/api/donate', (req, res) => {
  const { donorName, amount, currency } = req.body;

  if (!donorName || typeof donorName !== 'string') {
    return res.status(400).json({ status: 'fail', error: 'Invalid or missing donor name.' });
  }

  if (amount === undefined || amount === null || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ status: 'fail', error: 'Donation amount must be greater than zero.' });
  }

  return res.status(200).json({
    status: 'success',
    transactionId: 'txn_' + Date.now(),
    message: `Thank you ${donorName}! Processed ${amount} ${currency || 'USD'}.`
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Donation app running at http://localhost:${PORT}`);
  });
}

module.exports = app;