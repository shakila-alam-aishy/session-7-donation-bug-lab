const request = require('supertest');
const app = require('../server');

describe('Donation API Verification', () => {
  it('should reject requests with missing donor name', async () => {
    const res = await request(app)
      .post('/api/donate')
      .send({ amount: 100 });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/donor name/i);
  });

  // FAILING TEST: intentionally triggers the payload bug
  it('should successfully process a donation payload sent from UI', async () => {
    const buggyClientPayload = {
      donorName: "Rahim Uddin",
      donation_amount: "50",
      currency: "USD"
    };

    const res = await request(app)
      .post('/api/donate')
      .send(buggyClientPayload);

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.transactionId).toBeDefined();
  });
});