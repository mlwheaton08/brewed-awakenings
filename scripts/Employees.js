import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener('click', (e) => {
    const itemClicked = e.target;
    if (itemClicked.id.startsWith('employee')) {
        const employeeIdArray = itemClicked.id.split('--');
        const employeeId = parseInt(employeeIdArray[1]);
        for (const employee of employees) {
            if (employee.id === employeeId) {
                let soldCount = 0;
                for (const order of orders) {
                    if (employee.id === order.employeeId) {
                        soldCount += 1
                    }
                }
                alert(`${employee.name} has sold ${soldCount} products`)
            }
        }
    }
})