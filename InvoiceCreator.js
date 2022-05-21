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
