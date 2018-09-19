'use strict';


var globalTime = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm', '7:00pm', '8:00pm'];

function PatCookiesLocation (locationName, minCust, maxCust, avgCookiesPerCust, idPat) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.idPat = idPat;
  this.hourlyCustomersArray = [];
  this.hourlySalesArray = [];
  this.totalSales = 0;
  //this.totalByHour = 0;
}

PatCookiesLocation.prototype.calcHourlyCustomers = function() {
  for(var i = 0; i < globalTime.length; i++) {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.hourlyCustomersArray.push(randomCust);
  }
};

PatCookiesLocation.prototype.calcHourlySales = function() {
  for(var i = 0; i < globalTime.length; i++) {
    var cookiesSoldThatHour = this.hourlyCustomersArray[i] * this.avgCookiesPerCust;
    this.hourlySalesArray.push(cookiesSoldThatHour);
    this.totalSales += cookiesSoldThatHour;
    //this.totalByHour = some function to add cookies by hours
  }
};

function makeHeaderRow() {
  var cookieTable = document.getElementById('fullTable');
  var thEl = document.createElement('th');
  var trEl = document.createElement('tr');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);

  for (var i = 0; i < globalTime.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = globalTime[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Total';
  trEl.appendChild(thEl);

  cookieTable.appendChild(trEl);
}
makeHeaderRow();

PatCookiesLocation.prototype.render = function() {
  this.calcHourlyCustomers();
  this.calcHourlySales();
  var cookieTable = document.getElementById('fullTable');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);
  // cookieTable.appendChild(trEl);

  for (var i = 0; i < globalTime.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = Math.round(this.hourlySalesArray[i]);
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = Math.round(this.totalSales);
  trEl.appendChild(tdEl);

  cookieTable.appendChild(trEl);
};

//function PatCookiesLocation (locationName, minCust, maxCust, avgCookiesPerCust, idPat)
var firstAndPike = new PatCookiesLocation('First and Pike', 23, 65, 6.3, 'pikeId');
firstAndPike.render();

var seaTac = new PatCookiesLocation('Sea-Tac Airport', 3, 24, 1.2, 'seaTacId');
seaTac.render();

var seaCenter = new PatCookiesLocation('Seattle Center', 11, 38, 3.7, 'seaCenterId');
seaCenter.render();

var capHill = new PatCookiesLocation('Capitol Hill', 20, 38, 2.3, 'capHillId');
capHill.render();

var alki = new PatCookiesLocation('Alki', 2, 16, 4.6, 'alkiId');
alki.render();

var totalPerHour = new PatCookiesLocation('Total by hour', '', '', '', 'totalPerHId');
totalPerHour.render();

//Making total by hour
//var locationArray = [firstAndPike, seatacAirport, seattleCenter, capitolHill, alki];
// function totalByHour (time, locationArray) {
//   this.time = time;
//   this.locationArray = locationArray;
//   this.hourlyCustomersArray = [];
//   this.hourlySalesArray = [];
//   this.totalSales = 0;
//   //this.totalByHour = 0;
// }
