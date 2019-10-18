'use strict';

//welcome vs. welcome back message:
//while message is not no/No/yes/Yes,
//prompt for whether user has been to website before
//if no or No, say welcome
//if yes or Yes, say welcome back
function getWelcome() {
  var welcomeMessage = '';
  welcomeMessage = prompt('Have you visited our website before?');
  if (welcomeMessage === 'no' || 'No') {
    return 'Welcome!';
  }
  else if (welcomeMessage === 'yes' || 'Yes') {
    return 'Welcome back!';
  }
  else
  {
    return 'Hello!';
  }
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
//ask if reservation needs to be made
//if yes, ask how many people 1-8 will be coming
//print "You have reserved a table for x people."
//print person.jpg x times
function getReservation() {
  var people = 0;
  var reservation = '';
  while (isNaN(reservation)) {
    reservation = prompt('Will you be making a reservation with us?');
  }
  if (reservation == 'yes' || 'Yes') {
    while (isNaN(people) {  
      people = prompt('How many?');
    }
    alert('You have reserved a table for ' + people + '.');
    for (var i = 0; i < people; i++) {
      return('<img src="person.jpg">');
    }
  }
  }