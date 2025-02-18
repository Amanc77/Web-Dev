document
  .getElementById("expense-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("expense-name").value;
    let amount = document.getElementById("expense-amount").value;

    if (name === "" || amount === "") return;

    let expenseList = document.getElementById("expense-list");
    let listItem = document.createElement("li");
    listItem.classList.add("expense-item");
    listItem.innerHTML = `${name} - $${parseFloat(amount).toFixed(2)}
        <button class="delete-btn">       Delete</button>`;

    expenseList.appendChild(listItem);

    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";

    updateTotal();

    listItem
      .querySelector(".delete-btn")
      .addEventListener("click", function () {
        listItem.remove();
        updateTotal();
      });
  });

function updateTotal() {
  let total = 0;
  document.querySelectorAll(".expense-item").forEach((item) => {
    let amount = parseFloat(item.innerText.split("- $")[1]);
    total += amount;
  });
  document.getElementById("total-amount").innerText = `$${total.toFixed(2)}`;
}
