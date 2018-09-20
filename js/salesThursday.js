'use strict';

var globalTime = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm', '7:00pm', '8:00pm'];
var thead = document.getElementsByTagName('thead')[0];
var tbody = document.getElementsByTagName('tbody')[0];
var tfoot = document.getElementsByTagName('tfoot')[0];
var addForm = document.getElementById('addLocation');
var salesForm = document.getElementById('locationForm');

// Store Constructor Function
function PatLocation(locationName, minCust, maxCust, avg) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avg = avg;
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  this.getSales();

  PatLocation.allLocations.push(this);
}
PatLocation.allLocations = [];

PatLocation.prototype.getSales = function() {
  for (var i = 0; i < globalTime.length; i++) {
    var numCustomers = randMix(
      this.minCust,
      this.maxCust);
    var hourlyCount = Math.floor(numCustomers * this.avg);
    this.cookiesPerHour.push(hourlyCount);
    this.totalCookies += hourlyCount;
  }
};

PatLocation.prototype.render = function(locationIndex) {
  var tr = addElement('tr', '', tbody);
  addElement('td', this.locationName, tr);
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    var td = addElement('td', '', tr);
    var input = addElement('input', '', td);
    input.value = this.cookiesPerHour[i];
    input.dataset['hour'] = i;
    input.dataset['location'] = locationIndex;
  }
  addElement('td', this.totalCookies, tr);
};

// func: rando(min,max)
function randMix(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// DOM Magical time saver
function addElement(element, content, parent) {
  var newElement = document.createElement(element);
  var newContent = document.createTextNode(content);
  newElement.appendChild(newContent);
  parent.appendChild(newElement);
  return newElement;
}

function renderHeader() {
  thead.innerHTML = '';
  var tr = addElement('tr', '', thead);
  addElement('th', '', tr);
  for (var i = 0; i < globalTime.length; i++) {
    addElement('th', globalTime[i], tr);
  }
  addElement('th', 'Total', tr);
}

function renderFooter() {
  tfoot.innerHTML = '';
  var tr = addElement('tr', '', tfoot);
  addElement('th', 'Hourly Total', tr);

  var grandTotal = 0;

  for (var i = 0; i < globalTime.length; i++) {
    var hourTotal = 0;
    for (var x = 0; x < PatLocation.allLocations.length; x++) {
      hourTotal += PatLocation.allLocations[x].cookiesPerHour[i];
      grandTotal += PatLocation.allLocations[x].cookiesPerHour[i];
    }
    addElement('th', hourTotal, tr);
  }

  addElement('th', grandTotal, tr);
}

function renderStores() {
  tbody.innerHTML = '';
  for (var i = 0; i < PatLocation.allLocations.length; i++) {
    PatLocation.allLocations[i].render(i);
  }
}

// Add a new store
function handleSubmit(event) {
  event.preventDefault();
  var locationName = event.target.place.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseFloat(event.target.avg.value);

  var addedStore = new PatLocation(locationName, min, max, avg);

  addedStore.render();

  renderFooter();
}

function handleChange(event) {
  var location = event.target.dataset['location'];
  var hour = event.target.dataset['hour'];
  var newValue = parseInt(event.target.value);
  PatLocation.allLocations[location].cookiesPerHour[hour] = newValue;
  renderFooter();
}

addForm.addEventListener('submit', handleSubmit);
salesForm.addEventListener('change', handleChange);

new PatLocation('1st and Pike Place', 22, 65, 6.3);
new PatLocation('Seatac', 3, 24, 1.2);
new PatLocation('Seattle Center', 11, 38, 3.7);
new PatLocation('Capitol Hill', 20, 38, 2.3);
new PatLocation('Alki', 2, 16, 4.6);

renderHeader();
renderStores();
renderFooter();

