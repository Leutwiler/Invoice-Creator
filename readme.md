# Invoice Creator

In this repository you can find an invoice creator. The user can select up to 3 inputs for the invoice.

The main goal of this project is to provide a tool for people to create invoices.

This is my second Javascript project :)

## Base of our Javascript code 👨‍💻

The following JavaScript code represents the base of all the project. We have a base services array, which contains the available services and the respective costs.

There are three buttons which work very similar to each other. The first refers to a car wash, the second to mow lawn and the third to pull weeds. After a button click, the respective button gets disabled, so you can't input the same service twice in an invoice.

It also has a final button which is the Send Invoice button, which in this base tool just resets the values to the original state and reactivates the buttons.

```
const carBtn = document.getElementById("car-btn")
const mowBtn = document.getElementById("mow-btn")
const weedsBtn = document.getElementById("weeds-btn")
const uL = document.getElementById("reqServices-ul")
const totalCostEl = document.getElementById("totalCost-el")
const sendBtn = document.getElementById("send-btn")

const baseServices = [{
    service: "Wash Car",
    cost: 10},
    {service: "Mow Lawn",
    cost: 20},
    {service: "Pull Weeds",
    cost: 30}
]

const totalCostText = "Total Amount:"
let totalCostValue = 0

carBtn.addEventListener("click", function() {
    uL.innerHTML += `${baseServices[0].service}: $${baseServices[0].cost}<br>`
    totalCostValue += baseServices[0].cost
    totalCostEl.textContent = `${totalCostText} $${totalCostValue}`
    carBtn.disabled = true
})

mowBtn.addEventListener("click", function() {
    uL.innerHTML += `${baseServices[1].service}: $${baseServices[1].cost}<br>`
    totalCostValue += baseServices[1].cost
    totalCostEl.textContent = `${totalCostText} $${totalCostValue}`
    mowBtn.disabled = true
})

weedsBtn.addEventListener("click", function() {
    uL.innerHTML += `${baseServices[2].service}: $${baseServices[2].cost}<br>`
    totalCostValue += baseServices[2].cost
    totalCostEl.textContent = `${totalCostText} $${totalCostValue}`
    weedsBtn.disabled = true
})

sendBtn.addEventListener("click", function() {
    totalCostValue = 0
    totalCostEl.textContent = `${totalCostText} $${totalCostValue}`
    uL.textContent = ""
    carBtn.disabled = false
    mowBtn.disabled = false
    weedsBtn.disabled = false
})
```

## The HTML File 📃

This HTML file is pretty simple, it only covers the necessary for the tool to work and for Javascript to interact with the DOM. You can see the lines for the buttons and also the list for the required services.

It is also linked to a CSS file.

```
<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1 id="title-el">Invoice Creator <br> <span class="fontsize">Thanks for accessing my profile!</span></h1>
        <div>
        <button id="car-btn"> Wash Car: $10 </button>
        <button id="mow-btn"> Mow Lawn: $20 </button>
        <button id="weeds-btn"> Pull Weeds: $30 </button>
        </div>
        <ul id="reqServices-ul"></ul>
        <p></p>
        <h2 id="totalCost-el">Total Amount: $0</h2>
        <button id="send-btn"> Send Invoice </button>
        <script src="InvoiceCreator.js"></script>
    </body>
</html>
```

## Thanks 😄

Thanks for reading my code! This is my second Javascript project! I'm happy because I'm improving my coding skills every day and now I can code in Javascript!

If you would like to talk to me, feel free to text me on Twitter or LinkedIn.
