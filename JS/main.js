var width1 = window.innerWidth;
if(width1< 500)
{
  var width2 = (width1 / 2) - 15;
}
if((width1> 500) &&(width1<1000))
{
  var width2 = (width1 / 2) - 50;
}
if(width1>1000)
{
  var width2 = (width1 / 2) -100;
}
document.getElementById("slideshow").style.height = width2+"px";