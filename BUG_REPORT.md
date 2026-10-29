# Lab Bug & Security Audit Report

## 1. Identified Issues
| ID | Issue Type (Logic / Security / UI) | Location (File & Line) | Description |
|---|---|---|---|
| BUG-01 | Logic / Payload Mismatch | `public/script.js` | Frontend sends `donation_amount` instead of `amount` |
| BUG-02 | UI Runtime Crash | `public/script.js` | Trying to access `data.details.reason` which is undefined |
| SEC-01 | Hardcoded Secret | `server.js` | `STRIPE_SECRET_KEY` is hardcoded in source code |

## 2. Root Cause Analysis (Aided by AI)
- Explain why the automated test failed:
- Prompt used with AI assistant:

## 3. Implemented Fixes Checklist
- [ ] Updated frontend payload key to match backend contract
- [ ] Fixed UI error handling property access
- [ ] Extracted secret key to environment variables (.env)
- [ ] All automated tests passing (`npm test`)

## 4. Final Test Output
Paste the output of `npm test` after fixing the issues below: