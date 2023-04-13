let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBTN =  document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
let deleteBtn = document.getElementById("delete-btn")
let tabBtn = document.getElementById("tab-btn")

localStorage.clear()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", function() {
  chrome.tabs.query({activeWindow :true, currentWindow: true}, function(){
    
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  render(myLeads)

  })

  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  render(myLeads)
})
function render(leads) {
  let listItems = "" 
  for (let i = 0;i < leads.length; i++){
  listItems += `
  <li>
   <a target = '_blank' href = "${leads[i]}">
  ${leads[i]}
   </a>
  </li>
  `
  }
  ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("click", function(){
  console.log("double clicked")
  localStorage.clear()
  myLeads = []
  render(myLeads)
})


inputBTN.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  
render(myLeads)
console.log(localStorage.getItem("myLeads"))
})
