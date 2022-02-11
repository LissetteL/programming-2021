
  function myFunction() {
    var text;
    var day = document.getElementById("myInput").value;
  
    switch(day) {
      case "Sunday":
        text = "Sorry, to tell you but tomorrow is Monday.";
      break;
      case "Saturday":
        text = "Weekend!";
      break;
      case "Monday":
      text = "Sorry, it´ll be awhile till the weekend.";
      break;
      case "Tuesday":
      text = "It´ll be awhile, until Friday...";
      break;
      case "Wednesday":
        text = "Hang in there, a couple more days till the weekend.";
      break;
      case "Thursday":
        text = "Almost the weekend!";
      break;
      case "Friday":
        text = "It´s practically the weekend.";
      break;
      default:
      text = "The weekend will come soon";
    }
    document.getElementById("day").innerHTML = text;
  }