var screen = document.getElementById('display');
//this function allows us to print to the screen what we push
function math(button){
  screen.value += button;
  if(button === "CE"){
    screen.value = "";
  }
}
//This function takes are string of numbers and turns them into usable math.
function answer(){
  button = screen.value;
  button = eval(button);
  screen.value=button;
}

function  undo(){
  var x = screen.value;
  var pink = x.length-1;
  var y = x.substring(0, pink);
  screen.value = y;
}

function numbers(){
  newArray =[];

while(newArray.length < 6){
    var newNumber = Math.floor((Math.random()*69)+1);
  if(newArray.indexOf(newNumber) > -1) continue;
  newArray[newArray.length] =newNumber;
 }
     screen.value = (newArray);
 }
