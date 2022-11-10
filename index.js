let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    myleads = []
    ulEl.innerHTML = ""
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
            <button id="delete-lead-btn" onclick="deleteLead(${i})">X</button>
            <br />
        `
    }
    ulEl.innerHTML = listItems  
}

function deleteLead(index) {
    const newList = myLeads.filter((lead, i) => myLeads.indexOf(lead) !== index)
    myLeads = newList
    leadsFromLocalStorage.splice(index, 1)
    localStorage.setItem("myLeads", JSON.stringify(leadsFromLocalStorage))
    renderLeads()
}
