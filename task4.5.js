const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
// filter() all credit transactions
const creditTransactions = transactions.filter(t => t.type === "credit");
console.log(creditTransactions);

// map() to extract only transaction amounts
const amounts = transactions.map(t => t.amount);
console.log(amounts);

// reduce() to calculate final account balance
const finalBalance = transactions.reduce((balance, t) => {
  return t.type === "credit" ? balance + t.amount : balance - t.amount;
}, 0);

console.log(finalBalance);

// find() the first debit transaction
const firstDebit = transactions.find(t => t.type === "debit");
console.log(firstDebit);

//findIndex() of transaction with amount 10000 */
const index = transactions.findIndex(t => t.amount === 10000);
console.log(index);