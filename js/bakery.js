'use strict';

//welcome vs. welcome back message:
//while message is not no/No/yes/Yes,
function getWelcome() {
  var welcomeMessage;
  welcomeMessage = prompt('Have you visited our website before?'); //prompt for whether user has been to website before
  if (welcomeMessage === 'no' || 'No') { //if no or No, say welcome
    welcomeMessage = 'Welcome!';
  }
  else if (welcomeMessage === 'yes' || 'Yes') { //if yes or Yes, say welcome back
    welcomeMessage = 'Welcome back!';
  }
  else {
    welcomeMessage = 'Hello!';
  }

  return '<h2>' + welcomeMessage + '</h2>';
}

//good morning/afternoon/evening message:
//check local system time
//if morning/afternoon/evening, print message as such
function getTime() {
  var today = new Date();
  var time = today.getHours();
  if (time > 17) {
    return 'Good evening, ';
  }
  else if (time > 12) {
    return 'Good afternoon, ';
  }
  else if (time > 0) {
    return 'Good morning, ';
  }
  else {
    return 'Good day, ';
  }
}

//insert name function:
//while string is not a name,
//prompt for name
//concatenate "Welcome," to name
function firstName() {
  var name = prompt('What is your first name?');
  if (name === '' || name !== null) { //if message is a string or not null
    return name;
  }
  else if (name === null) { //else if message is null
    return 'and feel free to explore our website!';
  }
  else if (name === ' ') {
    return 'and feel free to explore our website!';
  }
}

//get reservation:
function getReservation() {
  var people;
  var reservation = prompt('Will you be making a reservation with us?');
  while (typeof reservation === 'number') { //ask if reservation needs to be made
    reservation = prompt('Will you be making a reservation with us?');
  }
  if (reservation === 'yes' || 'Yes') { //if yes, ask how many people 1-8 will be coming
    people = prompt('How many people?');
    var people2 = parseInt(people);
  }
  alert('You have reserved a table for ' + people2 + '.'); //print "You have reserved a table for x people."
  for (var i = 0; i < people2; i++) { //print person.jpg x times
    document.write('<img src="person.jpg" alt="reservation" id="person">');
  }
}