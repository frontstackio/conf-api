/* ***************************
 * 
 * Project
 * 
 *************************** */

const PAYSTACK_API_BASE = "https://api.paystack.co";
const AUTHORIZATION_HEADER = "Bearer sk_test_efc0a320234d4887fbd4f1bb4419fb68ed748ed0";

// Step 1 - Create customer (POST)

function createCustomer(email) {


}

document.getElementById("create-customer-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector("input[name='email']").value;
  createCustomer(email);
});

// Step 2 - List customers (GET)

function listCustomers() {

}


// Step 3 - Initialize transaction (POST)

function initTransaction(email, amount) {


}

document.getElementById("init-transaction-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector("select[name='email']").selectedOptions[0].value;
  const amount = e.target.querySelector("input[name='amount']").value;
  initTransaction(email, amount);
});

// Step 4 - Fetch transaction (GET)

function listTransactions() {

}

// Utility functions

function displayCustomers(customers) {

  let customersList = "";
  let customersOption = "";

  customers.forEach((customer) => {
    customersList += `<li>
      <img src="${customer.metadata ? customer.metadata.photos[0].url : 'https://exelord.github.io/ember-initials/images/default-d5f51047d8bd6327ec4a74361a7aae7f.jpg'}">
      <strong>${customer.first_name || ''} ${customer.last_name || ''}</strong>
      <p>${customer.email}</p>
      <p>${customer.customer_code}</p>
    </li>`;

    customersOption += `<option>${customer.email}</option>`;   
  });

  document.getElementById("all-customers").innerHTML = customersList;
  document.getElementById("customer-emails").insertAdjacentHTML("beforeend", customersOption);

}

function displayTransactions(transactions) {

  let transactionsList = "";

  transactions.forEach((transaction) => {
    transactionsList += `<li>
      <strong>${transaction.amount / 100} ${transaction.currency}</strong>
      <p>${transaction.createdAt}</p>
      <p>${transaction.status}</p>
      <p>${transaction.reference}</p>
    </li>`;
  });

  document.getElementById("all-transactions").innerHTML = transactionsList;
}
