'use strict';

var globalTime = [0600, 0700, 0800, 0900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
var location = ['1st & Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

var firstAndPike = {
    minCustomers: 0,
    maxCustomer: 0,
    averageCookiesPerCustomer: 0,
    randomCustomerPerHour: function(){
        for (i = 0; i<globalTime.length; i++)
        return 
    }
}

var seaTacAirport = {
    minCustomers: 0,
    maxCustomer: 0,
    averageCookiesPerCustomer: 0,
    randomCustomerPerHour: randomNumber
}

var seattleCenter = {
    minCustomers: 0,
    maxCustomer: 0,
    averageCookiesPerCustomer: 0,
    randomCustomerPerHour: randomNumber
}

var capitolHill = {
    minCustomers: 0,
    maxCustomer: 0,
    averageCookiesPerCustomer: 0,
    randomCustomerPerHour: randomNumber
}


function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}