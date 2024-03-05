let text= "Do you want to share you're personal information OK or cancel.";
if (confirm(text)==true)
{var username= prompt("Please Enter Your Name:");
var h = prompt("Pleaee Your Height (in inches): ");
var w=prompt ("Please Enter your Weight ( in kg)");
var heigh=h/12;
var weigh=(w*2.2);
var weight=weigh.toFixed(2);
var height=heigh.toFixed(1);
alert("Nickname: "+username+"\n Height: " +height+"\n Weight: "+weight+" lbs");
}

else
{ 
    alert("User does not wish to share his/her information.");
}

document.getElementById("text").interHTML = text;
