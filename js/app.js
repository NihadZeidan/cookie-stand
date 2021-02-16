'use strict';

function randomCus(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


let hours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];


function Country(locationName, minCustomers, maxCustomers, avgCookiesPerCus, randomCustomers, cookiesPerHour, total, totalPerHour, locations) {
    this.locationName = locationName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCus = avgCookiesPerCus;
    this.randomCustomers = 0;
    this.cookiesPerHour = [];
    this.total = 0;


}
console.log(Country.locations);

Country.prototype.perHour = function () {
    for (let j = 0; j < hours.length; j++) {
        this.randomCustomers = (randomCus(this.minCustomers, this.maxCustomers));
        this.cookiesPerHour[j] = Math.floor(this.avgCookiesPerCus * this.randomCustomers);
        this.total += this.cookiesPerHour[j]
        this.cookiesPerHour.push(this.total);

    }

}

Country.prototype.createTabel = function () {
    let row = document.createElement('tr');
    table.appendChild(row);

    let data = document.createElement('td')
    row.appendChild(data)
    data.textContent = `${this.locationName}`

    for (let i = 0; i <= hours.length; i++) {
        let rowData = document.createElement('td')
        rowData.textContent = this.cookiesPerHour[i]
        row.appendChild(rowData)
    }
}



let table = document.getElementById('parent')
table.setAttribute("style", "text-align: center;")

let createHeadingRow = function () {
    let firstRow = document.createElement('tr')
    table.appendChild(firstRow)
    let firstCell = document.createElement('th')
    firstCell.textContent = " Time | "
    firstRow.appendChild(firstCell)


    for (let i = 0; i < hours.length; i++) {
        let firstHeader = document.createElement('th')
        firstHeader.textContent = hours[i];
        firstRow.appendChild(firstHeader);
    }

    let lastCell = document.createElement('th')
    lastCell.textContent = "Daily Total"
    firstRow.appendChild(lastCell)

}

createHeadingRow();





let seattle = new Country('Seattle ', 23, 65, 6.3, 0, 0, 0);
seattle.perHour();
seattle.createTabel();
console.log(seattle);

let tokyo = new Country('Tokyo ', 3, 24, 1.2);
tokyo.perHour();
tokyo.createTabel();
console.log(tokyo);

let dubai = new Country('Dubai ', 11, 38, 3.7);
dubai.perHour();
dubai.createTabel();
console.log(dubai);

let paris = new Country('Paris ', 20, 38, 2.3);
paris.perHour();
paris.createTabel();
console.log(paris);

let lima = new Country('Lima ', 2, 16, 4.6);
lima.perHour();
lima.createTabel();
console.log(lima);



let createFinalRow = function () {

    let finalRow = document.createElement('tr')
    table.appendChild(finalRow)
    let data2 = document.createElement('th')
    finalRow.appendChild(data2)
    data2.textContent = "Total |"

    for (let i = 0; i <= hours.length; i++) {
        let data = document.createElement('th')
        finalRow.appendChild(data)
        let totalOfTotal = seattle.cookiesPerHour[i] + tokyo.cookiesPerHour[i] + dubai.cookiesPerHour[i] + paris.cookiesPerHour[i] + lima.cookiesPerHour[i]
        data.textContent = totalOfTotal
        console.log(totalOfTotal)
    }

}

createFinalRow();

