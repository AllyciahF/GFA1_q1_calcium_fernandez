let text = "Do you want to share you're personal information OK or Cancel.";
  if (confirm(text) == true) {
    var username= prompt("Please Enter Your Name: ");
    var h= prompt("Please Enter Your Height(in inches): ");
    var w= prompt("Please Enter Your Weight(in kg):");
    var heigh=h/12;
    var weigh=(w*2.2);
    var weight=weigh.toFixed(2);
    height=heigh.toFixed(1)
    alert("Nickname: " +username+"\n Height: "+height+"\n Weight: "+weight+"lbs");
} else {
    text = "“User does not wish to share his/her information.";
  }
  document.getElementById("text").innerHTML = text;