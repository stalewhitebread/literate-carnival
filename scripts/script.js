//$= jquery, no $ with javascript
//jquery is library with built-in functions
$(document).ready(function(){
  //click on image, get message
  $("#btnGetFacts").click(function () {
    $("#coolNameFactsOutput").html();
    // handle it if input is blank

    let firstName = $("#firstName").val();
    console.log("first name = ", firstName);
    console.log("fname length = ", nameLength(firstName));
    console.log("you clicked button");

    //$("#coolNameFactsOutput").html(nameLength(userName)+ getSpiritAnimal(userName));
    //$("#coolNameFactsOutput").html(generateCoolNameFacts(userName));
   

     $("#coolNameFactsOutput").html(nameLength(firstName)+
       '<img src="https://pens.hockey/wp-content/uploads/2019/01/DogeRemoteHeadphones.jpg">'
     );

  
  });
  $("#btnGetFacts2").click(function () {
    let lastName = $("#lastName").val();
    console.log("last name = ", lastName);
    $("#coolNameFactsOutput2").html(getSpiritAnimal(lastName));



  });
});

function nameLength(name) {
  return "Your name would be 8 letters long if it was Fernando! Cool!";
}

function getSpiritAnimal(lastName) {
  //flow control: case switch, loop, if/then

  if (lastName.length <= 3) {
    //execute some code
    return "Wow! You are rat bro..." + '<img src="https://pbs.twimg.com/media/FCND0JBVUAAXiCc.png">';
  } else if (lastName.length  <=7) {
    return "You are basically duck." + '<img src="https://64.media.tumblr.com/a96bbe4709c5bb76429c20670bc0a012/77e7e6f8003803bc-6b/s1280x1920/411e74152e2cab53aa8bd29f1daf1af82c13e8a6.png">';
  } else {
    return "You are the whole bear!." +'<img src= "https://i.pinimg.com/474x/01/06/77/010677e3581aa0e684a8844e0feec021.jpg">';
  }
}