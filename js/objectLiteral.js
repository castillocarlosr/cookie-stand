'use strict';

var locationString = ['1st and Pike', 'Sea-Tac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var locationArray = [firstAndPike, seatacAirport, seattleCenter, capitolHill, alki];
var globalTime = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

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

var pikeTotal = 0;
var airportTotal = 0;
var centerTotal = 0;
var capitalTotal = 0;
var alkiTotal = 0;

var avgPikeCookies = 6.3;
var avgAirportCookies = 1.2;
var avgCenterCookies = 3.7;
var avgCapitalCookies = 2.3;
var avgAlkiCookies = 4.6;

var pikeSum = 0;
var airportSum = 0;
var centerSum = 0;
var capitalSum = 0;
var alkiSum = 0;

var firstAndPike = {
  minimumCustomersPike: 23,
  maximumCustomersPike: 65,
  averageCookies: avgPikeCookies,
  randomCustomers: function() {
    console.log(locationString[0])
    for (var i = 0; i < globalTime.length; i++) {
      customersPike.push(
        getRandomNumber(this.minimumCustomersPike, this.maximumCustomersPike)
      )
      console.log(globalTime[i] + ' = ' + customersPike[i] + ' random customers.');
    }
  }

};

var seatacAirport = {
  minimumCustomersAir: 3,
  maximumCustomersAir: 24,
  averageCookies: avgAirportCookies,
  randomCustomers: function() {
    console.log(locationString[1])
    for (var i = 0; i < globalTime.length; i++) {
      customersAirport.push(
        getRandomNumber(this.minimumCustomersAir, this.maximumCustomersAir)
      )
      console.log(globalTime[i] + ' = ' + customersAirport[i] + ' random customers.');
    }
  }
};

var seattleCenter = {
  minimumCustomersCenter: 11,
  maximumCustomersCenter: 38,
  averageCookies: avgCenterCookies,
  randomCustomers: function() {
    console.log(locationString[2])
    for (var i = 0; i < globalTime.length; i++) {
      customersCenter.push(
        getRandomNumber(this.minimumCustomersCenter, this.maximumCustomersCenter)
      )
      console.log(globalTime[i] + ' = ' + customersCenter[i] + ' random customers.');
    }
  }
};

var capitolHill = {
  minimumCustomersCapital: 20,
  maximumCustomersCapital: 38,
  averageCookies: avgCapitalCookies,
  randomCustomers: function() {
    console.log(locationString[3])
    for (var i = 0; i < globalTime.length; i++) {
      customersCapital.push(
        getRandomNumber(this.minimumCustomersCapital, this.maximumCustomersCapital)
      )
      console.log(globalTime[i] + ' = ' + customersCapital[i] + ' random customers.');
    }
  }
};

var alki = {
  minimumCustomersAlki: 2,
  maximumCustomersAlki: 16,
  averageCookies: avgAlkiCookies,
  randomCustomers: function() {
    console.log(locationString[4])
    for (var i = 0; i < globalTime.length; i++) {
      customersAlki.push(
        getRandomNumber(this.minimumCustomersAlki, this.maximumCustomersAlki)
      )
      console.log(globalTime[i] + ' = ' + customersAlki[i] + ' random customers');
      return(globalTime[i] + customersAlki[i])
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

firstAndPike.randomCustomers();
seatacAirport.randomCustomers();
seattleCenter.randomCustomers();
capitolHill.randomCustomers();
alki.randomCustomers();

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

// var newEl = document.createElement('li');
// var newText = document.createTextNode('pike');
// newEl.appendChild(newText);
// var position = document.getElementById('center')[0];
// position.appendChild(newEl);

// var locationsAll = ['PikeSakes', 'Airpot', 'seattleCenter', capitolHill, alki];
// //var testAll = ['pike', 'airport', 'center'];
// function makeUL(array) {
//   var list = document.createElement('li');
//   for (var i = 0; i < array.length; i++) {
//     var item = document.createElement('');
//     item.appendChild(document.createTextNode(array[i]));
//     list.appendChild(item);
//   }
//   return list;
// }
// document.getElementById('pike').appendChild(makeUL(locationsAll[0]);
//makeUL(locationsAll);

// var el = document.createElement('li'),
//   content = document.createTextNode('My sample text'),
//   myUl = document.getElementById('ulOne');

// el.appendChild(content);
// el.id = 'pike';

// myUl.appendChild(el);
// document.getElementById('pike').appendChild(makeUL(locationsAll[0]);
var pikeArray = [firstAndPike];
var pikeList = document.getElementById('pike');
var newLi = document.createElement('li');
newLi.textContent = pikeArray[0];
pikeList.appendChild(newLi);
pikeCSS.classList.add('pike');
