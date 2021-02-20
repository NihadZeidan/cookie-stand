'use strict';

function randomCus(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let hours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];

let city = [];

function Country(locationName, minCustomers, maxCustomers, avgCookiesPerCus) {
    this.locationName = locationName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCus = avgCookiesPerCus;
    this.randomCustomers = 0;
    this.cookiesPerHour = [];
    this.total = 0;
    city.push(this);
}

Country.prototype.perHour = function () {
    for (let j = 0; j < hours.length; j++) {
        this.randomCustomers = (randomCus(this.minCustomers, this.maxCustomers));
        this.cookiesPerHour[j] = Math.floor(this.avgCookiesPerCus * this.randomCustomers);
        this.total += this.cookiesPerHour[j];
        // this.cookiesPerHour.push(this.total);

    }

}

Country.prototype.createTabel = function () {
    let row = document.createElement('tr');
    table.appendChild(row);

    let data = document.createElement('td')
    row.appendChild(data)
    data.textContent = `${this.locationName}`

    for (let i = 0; i < hours.length; i++) {
        let rowData = document.createElement('td')
        rowData.textContent = this.cookiesPerHour[i]
        row.appendChild(rowData)
    }

        let dailyTotal = document.createElement('td')
        dailyTotal.textContent = this.total
        row.appendChild(dailyTotal);

}



let table = document.getElementById('parent');

let createHeadingRow = function () {
    let firstRow = document.createElement('tr');
    table.appendChild(firstRow);
    let firstCell = document.createElement('th');
    firstCell.textContent = " Time";
    firstRow.appendChild(firstCell);


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

console.log(city);


let seattle = new Country('Seattle ', 23, 65, 6.3);
let tokyo = new Country('Tokyo ', 3, 24, 1.2);
let dubai = new Country('Dubai ', 11, 38, 3.7);
let paris = new Country('Paris ', 20, 38, 2.3);
let lima = new Country('Lima ', 2, 16, 4.6);

for (let i = 0; i < city.length; i++) {
    city[i].perHour();
    city[i].createTabel();
}





function createFinalRow () {
    let finalRow = document.createElement('tr')
    table.appendChild(finalRow)
    
    let totalDataFirstCell = document.createElement('th')
    finalRow.appendChild(totalDataFirstCell)
    totalDataFirstCell.textContent = "Total"
    
    for (let i = 0; i < hours.length; i++) {
        let totalData = document.createElement('th');
        finalRow.appendChild(totalData);
        let totalOfEach = 0;
        
        
        for (let y = 0; y < city.length; y++) {
            
            totalOfEach += city[y].cookiesPerHour[i]
            totalData.textContent = totalOfEach
            
        }
    }

    let TotalOfTotal = document.createElement('th')
    finalRow.appendChild(TotalOfTotal)
    
    for (let x = 0 ; x < city.length; x++) {
        TotalOfTotal.textContent += city[x].total
    }
    
}


createFinalRow();



let createForm = document.getElementById('createCity');
createForm.addEventListener('submit', addingLocation);


function addingLocation (event) {
    event.preventDefault();

    let name = event.target.locationName.value;
    // console.log(name);

    let min = event.target.minCustomer.value;
    // console.log(min);

    let max = event.target.maxCustomer.value;
    // console.log(max);

    let avg = event.target.avgCustomer.value;
    // console.log(avg);

    let locationAddedByUser = new Country(name, min, max, avg);

    let toClearTheTable = document.getElementById('parent')
    toClearTheTable.textContent = " ";
    createHeadingRow();
    
    for (let i = 0; i < city.length; i++) {
        city[i].perHour();
        city[i].createTabel();
    }
    
    createFinalRow();
}  
