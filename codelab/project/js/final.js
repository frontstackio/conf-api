/* ***************************
 * 
 * Project
 * 
 *************************** */

const PAYSTACK_API_BASE = "https://api.paystack.co";
const AUTHORIZATION_HEADER = "Bearer sk_test_efc0a320234d4887fbd4f1bb4419fb68ed748ed0";

// Step 1 - Create customer (POST)

function createCustomer(email) {

  fetch(`${PAYSTACK_API_BASE}/customer`, {
    method: "POST",
    body: JSON.stringify({ email: email }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": AUTHORIZATION_HEADER
    }
  })
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    listCustomers();
  });

}

document.getElementById("create-customer-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector("input[name='email']").value;
  createCustomer(email);
});

// Step 2 - List customers (GET)

function listCustomers() {

  fetch(`${PAYSTACK_API_BASE}/customer`, {
    method: "GET",
    headers: {
      "Authorization": AUTHORIZATION_HEADER
    }
  })
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    displayCustomers(res.data);
  });

}

listCustomers();

// Step 3 - Initialize transaction (POST)

function initTransaction(email, amount) {

  fetch(`${PAYSTACK_API_BASE}/transaction/initialize `, {
    method: "POST",
    body: JSON.stringify({ email: email, amount: amount }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": AUTHORIZATION_HEADER
    }
  })
  .then((res) => res.json())
  .then((res) => {
    console.log(res);

    document.getElementById("init-transaction-form").insertAdjacentHTML("afterend", `<p class="alert">Payment page successfully created! View at <a href="${res.data.authorization_url}">${res.data.authorization_url}</a></p>`);
  });

}

document.getElementById("init-transaction-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector("select[name='email']").selectedOptions[0].value;
  const amount = e.target.querySelector("input[name='amount']").value;
  initTransaction(email, amount);
});

// Step 4 - Fetch transaction (GET)

function listTransactions() {

  fetch(`${PAYSTACK_API_BASE}/transaction`, {
    method: "GET",
    headers: {
      "Authorization": AUTHORIZATION_HEADER
    }
  })
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    displayTransactions(res.data);
  });

}

listTransactions();

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
