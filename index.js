/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString){
  time = timeString.split(':')
  timeHour = time.parseInt([0])
  if timeHour > 12 {
  return 'Good Morning'
  }
  
  
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
