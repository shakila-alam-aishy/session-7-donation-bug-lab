document.getElementById('donateBtn').addEventListener('click', async () => {
  const statusDiv = document.getElementById('status');
  statusDiv.innerText = "Processing...";

  const nameVal = document.getElementById('name').value;
  const amountVal = document.getElementById('amount').value;

  // INTENTIONAL PAYLOAD BUG: key mismatch (donation_amount instead of amount)
  const payload = {
    donorName: nameVal,
    donation_amount: amountVal,
    currency: "USD"
  };

  try {
    const res = await fetch('/api/donate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok) {
      // INTENTIONAL UI CRASH BUG: accessing undefined property
      statusDiv.innerHTML = `<span style="color:red">Failed: ${data.details.reason}</span>`;
      return;
    }

    statusDiv.innerHTML = `<span style="color:green">${data.message}</span>`;
  } catch (err) {
    statusDiv.innerHTML = `<span style="color:red">Runtime Error: ${err.message}</span>`;
  }
});