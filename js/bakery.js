'use strict';

//welcome vs. welcome back message:
//while message is not no/No/yes/Yes,
//prompt for whether user has been to website before
//if no or No, say welcome
//if yes or Yes, say welcome back
function getWelcome() {
  var welcomeMessage = prompt('Have you visited our website before?');
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
  if ((name === '' || name !== null)) { //if message is a string or not null
    return name;
  }
  else if (name === null) { //else if message is null
    return 'and feel free to explore our website!';
  }
  else if (name === ' ') {
    return 'and feel free to explore our website!';
  }
}