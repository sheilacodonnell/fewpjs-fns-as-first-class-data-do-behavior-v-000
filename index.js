/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString){
  let time = timeString.split(':')
  let timeHour = parseInt(time[0])
    if (timeHour < 12) {
    return 'Good Morning';
  }
    else if (timeHour >= 12 && timeHour < 5) {
      return 'Good Afternoon'
    }
    else if (timeHour > 5 && timeHour < 12) {
      return 'Good Evening'
    }
  
  
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
