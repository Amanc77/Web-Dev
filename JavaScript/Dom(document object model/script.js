let para = document.getElementById("paragraph");
document.getElementById("changeText").addEventListener("click", function () {
  para.innerHTML = "Paragraph has changed...";
});

//ex2
let citilist = document.getElementById("cityList");

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    citilist.firstElementChild.style.color = "yellow";
  });

//ex3
let order = document.getElementById("order");
let chageorder = document
  .getElementById("changeOrder")
  .addEventListener("click", function () {
    order.innerHTML = "Order: Esprsso";
  });

//ex4

let addbtn = document.getElementById("addItem");

let soplist = document.getElementById("shoppingList");
let newitem = document.createElement("li");

newitem.innerText = "egg";

let newlist = addbtn.addEventListener("click", function () {
  soplist.appendChild(newitem);
});

//ex5
let task = document.getElementById("taskList");

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    task.lastElementChild.remove();
  });

//ex6
document.getElementById("clickButton").addEventListener("click", function () {
  alert("what are you doing");
});

ex7;
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target) {
    alert("you have selected" + event.target.innerHTML);
    event.target.style.color = "green";
  }
});

//ex8

// Form Handling
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submitFeedback")
    .addEventListener("click", function () {
      let feedback = document.getElementById("feedbackinput").value; // Get input value
      document.getElementById(
        "feedbackdisplay"
      ).innerHTML = `Feedback: ${feedback}`;
    });
});

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("colorText");
    descriptionText.style.backgroundColor = "yellow";
  });
