'use strict';

var globalTime = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm', '7:00pm', '8:00pm'];
var thead = document.getElementsByTagName('thead')[0];
var tbody = document.getElementsByTagName('tbody')[0];
var tfoot = document.getElementsByTagName('tfoot')[0];
var addForm = document.getElementById('addLocation');
var salesForm = document.getElementById('locationForm');

function PatLocation(locationName, minCust, maxCust, avgCook) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
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
    var hourlyCount = Math.floor(numCustomers * this.avgCook);
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

function randMix(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// DOM Crazy Magic
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
  addElement('th', 'Open Locations', tr);
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
    for (var k = 0; k < PatLocation.allLocations.length; k++) {
      hourTotal += PatLocation.allLocations[k].cookiesPerHour[i];
      grandTotal += PatLocation.allLocations[k].cookiesPerHour[i];
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

// Add Pat's new cookie store
function handleSubmit(event) {
  event.preventDefault();
  var locationName = event.target.place.value;
  var minCust = parseInt(event.target.minimum.value);
  var maxCust = parseInt(event.target.maximum.value);
  var avgCook = parseFloat(event.target.avgCook.value);

  var addedStore = new PatLocation(locationName, minCust, maxCust, avgCook);

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


//for the awesome "excel" link that goes with CSS
var links = document.getElementsByClassName('switcher');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', switchTableClass);
}

function switchTableClass(event) {
  event.preventDefault();
  var table = document.getElementById('myTable');
  table.className = event.target.dataset['table'];
}
