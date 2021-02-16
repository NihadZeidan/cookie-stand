'use strict';

function randomCus(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let hours = ["-", '6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];


function Country(locationName, minCustomers, maxCustomers, avgCookiesPerCus, randomCustomers, cookiesPerHour, total, totalPerHour) {
    this.locationName = locationName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCus = avgCookiesPerCus;
    this.randomCustomers = 0;
    this.cookiesPerHour = [];
    this.total = 0;
    this.valuePerHour = [];


}

Country.prototype.perHour = function () {
    for (let j = 0; j < hours.length; j++) {
        this.randomCustomers = (randomCus(this.minCustomers, this.maxCustomers));
        this.cookiesPerHour[j] = Math.floor(this.avgCookiesPerCus * this.randomCustomers);
        this.total += this.cookiesPerHour[j]
        this.cookiesPerHour.push(this.total);

        this.valuePerHour = this.cookiesPerHour
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

let createFirstRow = function () {

    let firstRow = document.createElement('tr')
    table.appendChild(firstRow)
    for (let i = 0; i < hours.length; i++) {
        let firstHeader = document.createElement('th')
        firstHeader.textContent = hours[i];
        firstRow.appendChild(firstHeader);
    }
}

createFirstRow();





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
    data2.textContent = "Total"

    for (let i = 0; i <= hours.length; i++) {
        let data = document.createElement('th')
        finalRow.appendChild(data)
        let total22 = seattle.valuePerHour[i] + tokyo.valuePerHour[i] + dubai.valuePerHour[i] + paris.valuePerHour[i] + lima.valuePerHour[i]
        data.textContent = total22
        console.log(total22)
    }

}

createFinalRow();


































// Country.prototype.getTotalPerHour = function () {


    //     for (let i = 0; i < hours.length; i++) { 
        //         let dataRow = document.createElement('td')
        //         dataRow.textContent = locations += this.cookiesPerHour[i]
        //     }
        // }


// seattle.getTotalPerHour();



// seattle.PerHour();
// console.log(seattle);



// let tokyo = {
    //     minCustomers: 3,
    //     maxCustomers: 24,
    //     avgCookiesPerCus: Math.floor(1.2),
    //     randomCustomers: 0,
    //     cookiesPerHour: [],

    //     PerHour: function () {
        //         for (let j = 0; j < hours.length; j++) {
            //             this.randomCustomers = randomCus(this.minCustomers, this.maxCustomers);
            //             this.cookiesPerHour[j] = this.avgCookiesPerCus * this.randomCustomers;


//         }

//     }

// }
// tokyo.PerHour();
// console.log(tokyo);



// let dubai = {
//     minCustomers: 11,
//     maxCustomers: 38,
//     avgCookiesPerCus: Math.floor(3.7),
//     randomCustomers: 0,
//     cookiesPerHour: [],

//     PerHour: function () {
//         for (let j = 0; j < hours.length; j++) {
//             this.randomCustomers = randomCus(this.minCustomers, this.maxCustomers);
//             this.cookiesPerHour[j] = this.avgCookiesPerCus * this.randomCustomers;


//         }

//     }

// }
// dubai.PerHour();
// console.log(dubai);


// let paris = {
//     minCustomers: 20,
//     maxCustomers: 38,
//     avgCookiesPerCus: Math.floor(2.3),
//     randomCustomers: 0,
//     cookiesPerHour: [],

//     PerHour: function () {
//         for (let j = 0; j < hours.length; j++) {
//             this.randomCustomers = randomCus(this.minCustomers, this.maxCustomers);
//             this.cookiesPerHour[j] = this.avgCookiesPerCus * this.randomCustomers;


//         }

//     }

// }
// paris.PerHour();
// console.log(paris);


// let lima = {
//     minCustomers: 2,
//     maxCustomers: 16,
//     avgCookiesPerCus: Math.floor(4.6),
//     randomCustomers: 0,
//     cookiesPerHour: [],

//     PerHour: function () {
//         for (let j = 0; j < hours.length; j++) {
//             this.randomCustomers = randomCus(this.minCustomers, this.maxCustomers);
//             this.cookiesPerHour[j] = this.avgCookiesPerCus * this.randomCustomers;


//         }

//     }

// }
// lima.PerHour();
// console.log(lima);









// let total = [seattle.cookiesPerHour[0] + seattle.cookiesPerHour[1] + seattle.cookiesPerHour[2] + seattle.cookiesPerHour[3] + seattle.cookiesPerHour[4] + seattle.cookiesPerHour[5] + seattle.cookiesPerHour[6] + seattle.cookiesPerHour[7] + seattle.cookiesPerHour[8] + seattle.cookiesPerHour[9] + seattle.cookiesPerHour[10] + seattle.cookiesPerHour[11] + seattle.cookiesPerHour[12] + seattle.cookiesPerHour[13], tokyo.cookiesPerHour[0] + tokyo.cookiesPerHour[1] + tokyo.cookiesPerHour[2] + tokyo.cookiesPerHour[3] + tokyo.cookiesPerHour[4] + tokyo.cookiesPerHour[5] + tokyo.cookiesPerHour[6] + tokyo.cookiesPerHour[7] + tokyo.cookiesPerHour[8] + tokyo.cookiesPerHour[9] + tokyo.cookiesPerHour[10] + tokyo.cookiesPerHour[11] + tokyo.cookiesPerHour[12] + tokyo.cookiesPerHour[13], dubai.cookiesPerHour[0] + dubai.cookiesPerHour[1] + dubai.cookiesPerHour[2] + dubai.cookiesPerHour[3] + dubai.cookiesPerHour[4] + dubai.cookiesPerHour[5] + dubai.cookiesPerHour[6] + dubai.cookiesPerHour[7] + dubai.cookiesPerHour[8] + dubai.cookiesPerHour[9] + dubai.cookiesPerHour[10] + dubai.cookiesPerHour[11] + dubai.cookiesPerHour[12] + dubai.cookiesPerHour[13], paris.cookiesPerHour[0] + paris.cookiesPerHour[1] + paris.cookiesPerHour[2] + paris.cookiesPerHour[3] + paris.cookiesPerHour[4] + paris.cookiesPerHour[5] + paris.cookiesPerHour[6] + paris.cookiesPerHour[7] + paris.cookiesPerHour[8] + paris.cookiesPerHour[9] + paris.cookiesPerHour[10] + paris.cookiesPerHour[11] + paris.cookiesPerHour[12] + paris.cookiesPerHour[13], lima.cookiesPerHour[0] + lima.cookiesPerHour[1] + lima.cookiesPerHour[2] + lima.cookiesPerHour[3] + lima.cookiesPerHour[4] + lima.cookiesPerHour[5] + lima.cookiesPerHour[6] + lima.cookiesPerHour[7] + lima.cookiesPerHour[8] + lima.cookiesPerHour[9] + lima.cookiesPerHour[10] + lima.cookiesPerHour[11] + lima.cookiesPerHour[12] + lima.cookiesPerHour[13]]

// console.log(total);

// let parent1 = document.getElementById('seattle')
// let parent2 = document.getElementById('tokyo')
// let parent3 = document.getElementById('dubai')
// let parent4 = document.getElementById('paris')
// let parent5 = document.getElementById('lima')

// parent1.textContent = `Seattle, Total : ${total[0]}`
// parent2.textContent = `Tokyo,  Total: ${total[1]}`
// parent3.textContent = `Dubai, Total: ${total[2]}`
// parent4.textContent = `Paris, Total: ${total[3]}`
// parent5.textContent = `Lima, Total: ${total[4]}`


// let unorderdList1 = document.createElement('ul');
// let unorderdList2 = document.createElement('ul');
// let unorderdList3 = document.createElement('ul');
// let unorderdList4 = document.createElement('ul');
// let unorderdList5 = document.createElement('ul');


// parent1.appendChild(unorderdList1);
// parent2.appendChild(unorderdList2);
// parent3.appendChild(unorderdList3);
// parent4.appendChild(unorderdList4);
// parent5.appendChild(unorderdList5);

// let addingList1 = function () {
//     for (let i = 0; i < seattle.cookiesPerHour.length; i++) {
//         let list = document.createElement('li');
//         unorderdList1.appendChild(list);

//         for (let d = 0; d < hours.length; d++) {
//             list.textContent = hours[i] + seattle.cookiesPerHour[i];

//         }
//     }

// }

// let addingList2 = function () {
//     for (let i = 0; i < tokyo.cookiesPerHour.length; i++) {
//         let list = document.createElement('li');
//         unorderdList2.appendChild(list);

//         for (let d = 0; d < hours.length; d++) {
//             list.textContent = hours[i] + tokyo.cookiesPerHour[i];

//         }
//     }

// }



// let addingList3 = function () {
//     for (let i = 0; i < dubai.cookiesPerHour.length; i++) {
//         let list = document.createElement('li');
//         unorderdList3.appendChild(list);

//         for (let d = 0; d < hours.length; d++) {
//             list.textContent = hours[i] + dubai.cookiesPerHour[i];

//         }
//     }

// }

// let addingList4 = function () {
//     for (let i = 0; i < paris.cookiesPerHour.length; i++) {
//         let list = document.createElement('li');
//         unorderdList4.appendChild(list);


//         for (let d = 0; d < hours.length; d++) {
//             list.textContent = hours[i] + paris.cookiesPerHour[i];

//         }
//     }
// }

// let addingList5 = function () {
//     for (let i = 0; i < lima.cookiesPerHour.length; i++) {
//         let list = document.createElement('li');
//         unorderdList5.appendChild(list);

//         for (let d = 0; d < hours.length; d++) {
//             list.textContent = hours[i] + lima.cookiesPerHour[i];

//         }
//     }

// }


// addingList1();
// addingList2();
// addingList3();
// addingList4();
// addingList5()