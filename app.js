// todo-common function for count
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", (event) => {
    count++;
    document.getElementById("cart-count").innerText = count;
    // console.log(event.target.parentNode.childNodes[1].innerText);
    const name = event.target.parentNode.childNodes[1].innerText;

    // console.log(event.target.parentNode.childNodes[3].childNodes[1].innerText)
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;

    // todo-find the area where the selected place and the price are shown
    const showSelected = document.getElementById("selected-place-container");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = name;
    const p2 = document.createElement("p");
    p2.innerText = price;
    li.appendChild(p);
    li.appendChild(p2);

    const budget = document.getElementById("budget").innerText;
    const convertedBudget = parseInt(budget);

    // todo-budget will not less then 900.if the cost is less the 900 ,show an alert and stop
    if (convertedBudget - parseInt(price) < 0) {
      alert("Budget is less than 900");
      return;
    }
    document.getElementById("budget").innerText =
      convertedBudget - parseInt(price);

    showSelected.appendChild(li);

    // // todo-count the selected price and show it in total cost area
    // const totalCost = document.getElementById("total-cost").innerText;
    // const cost = parseInt(totalCost);
    // const sum = cost + parseInt(price);
    // document.getElementById("total-cost").innerText = sum;

    // !total cost in one function
    totalPrice("total-cost", parseInt(price));
    grandTotalCost("grand-total", parseInt(price));

    // // todo-set the grand total cost
    // const grandTotal = document.getElementById("grand-total").innerText;
    // const grandTotalCost = parseInt(grandTotal);
    // const sum2 = grandTotalCost + parseInt(price);
    // document.getElementById("grand-total").innerText = sum2;
  });
}

//todo-set total cost in a function
function totalPrice(id, value) {
  const totalCost = document.getElementById(id).innerText;
  const cost = parseInt(totalCost) + parseInt(value);
  document.getElementById("total-cost").innerText = cost;
}

function grandTotalCost(category) {
  console.log(category);
  // todo-when select bus , + cost
  if (category == "bus") {
    const totalCost = document.getElementById("total-cost").innerText;
    const cost = parseInt(totalCost);
    const sum2 = cost + parseInt(100);
    document.getElementById("grand-total").innerText = sum2;
  }
  // todo-when select train , - cost
  else if (category == "train") {
    const totalCost = document.getElementById("total-cost").innerText;
    const cost = parseInt(totalCost);
    const sum2 = cost - parseInt(200);
    document.getElementById("grand-total").innerText = sum2;
  }
  // todo-when select flight , + cost
  else if (category == "flight") {
    const totalCost = document.getElementById("total-cost").innerText;
    const cost = parseInt(totalCost);
    const sum2 = cost + parseInt(500);
    document.getElementById("grand-total").innerText = sum2;
  }

  // todo-when no button is clicked, then show the grand total cost by the total cost
  else {
    const totalCost = document.getElementById("total-cost").innerText;
    const cost = parseInt(totalCost);
    document.getElementById("grand-total").innerText = cost;
  }

  const totalCost = document.getElementById("total-cost").innerText;
  const cost = parseInt(totalCost);
}
