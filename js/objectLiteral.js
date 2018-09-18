'use strict';

var locationString = ['1st and Pike', 'Sea-Tac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var locationArray = [firstAndPike, seatacAirport, seattleCenter, capitolHill, alki];
var globalTime = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var customersPike = [];
var customersAirport = [];
var customersCenter = [];
var customersCapital = [];
var customersAlki = [];

var totalPikeCookies = [];
var totalAirportCookies = [];
var totalCenterCookies = [];
var totalCapitalCookies = [];
var totalAlkiCookies = [];

var pikeSum = 0;
var airportSum = 0;
var centerSum = 0;
var capitalSum = 0;
var alkiSum = 0;

var avgPikeCookies = 6.3;
var avgAirportCookies = 1.2;
var avgCenterCookies = 3.7;
var avgCapitalCookies = 2.3;
var avgAlkiCookies = 4.6;

var pikeTotal = 0;
var airportTotal = 0;
var centerTotal = 0;
var capitalTotal = 0;
var alkiTotal = 0;

var firstAndPike = {
  minimumCustomers: 23,
  maximumCustomers: 65,
  averageCookies: avgPikeCookies,
  randomNum: function() {
    console.log(locationString[0])
    for (var i = 0; i < globalTime.length; i++) {
      customersPike.push(
        getRandomNumber(23, 65)
      )
      console.log(globalTime[i] + ' - ' + customersPike[i]);
    }
  }

};

var seatacAirport = {
  minimumCustomers: 3,
  maximumCustomers: 24,
  averageCookies: avgAirportCookies,
  randomNum: function() {
    console.log(locationString[1])
    for (var i = 0; i < globalTime.length; i++) {
      customersAirport.push(
        getRandomNumber(3, 24)
      )
      console.log(globalTime[i] + ' - ' + customersAirport[i]);
    }
  }
};

var seattleCenter = {
  minimumCustomers: 11,
  maximumCustomers: 38,
  averageCookies: avgCenterCookies,
  randomNum: function() {
    console.log(locationString[2])
    for (var i = 0; i < globalTime.length; i++) {
      customersCenter.push(
        getRandomNumber(11, 38)
      )
      console.log(globalTime[i] + ' - ' + customersCenter[i]);
    }
  }
};

var capitolHill = {
  minimumCustomers: 20,
  maximumCustomers: 38,
  averageCookies: avgCapitalCookies,
  randomNum: function() {
    console.log(locationString[3])
    for (var i = 0; i < globalTime.length; i++) {
      customersCapital.push(
        getRandomNumber(20, 38)
      )
      console.log(globalTime[i] + ' - ' + customersCapital[i]);
    }
  }
};

var alki = {
  minimumCustomers: 2,
  maximumCustomers: 16,
  averageCookies: 4.6,
  randomNum: function() {
    console.log(locationString[4])
    for (var i = 0; i < globalTime.length; i++) {
      customersAlki.push(
        getRandomNumber(2, 16)
      )
      console.log(globalTime[i] + ' - ' + customersAlki[i]);
    }
  }
};

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function arraySum(array, sum) {
  for (var i = 0; i < array.length; i++) {
  sum += array[i]
  }
  return sum;
};

function productSum(sum, avgCookies, total) {
  total = sum * avgCookies;
  return console.log(total);
  for ( var i = 0; i < locationArray.length; i++) {
    total = locationArray[i]
  }
}

firstAndPike.randomNum();
seatacAirport.randomNum();
seattleCenter.randomNum();
capitolHill.randomNum();
alki.randomNum();

pikeSum = arraySum(customersPike, pikeSum);
airportSum = arraySum(customersAirport, airportSum);
centerSum = arraySum(customersCenter, centerSum);
capitalSum = arraySum(customersCapital, capitalSum);
alkiSum = arraySum(customersAlki, alkiSum);

productSum(pikeSum, avgPikeCookies, pikeTotal);
productSum(airportSum, avgAirportCookies, airportTotal);
productSum(centerSum, avgCenterCookies, centerTotal);
productSum(capitalSum, avgCapitalCookies, capitalTotal);
productSum(alkiSum, avgAlkiCookies, alkiTotal);
