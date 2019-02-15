var base=parseInt(prompt("Enter base length in cm"));
alert(base + " cm")
var height=parseInt(prompt("Enter height in cm"));
alert(height + " cm")
var hypotenuse=parseInt(prompt("Enter hypotenuse in cm"));
alert(hypotenuse + " cm")
if (base + height <= hypotenuse) {
alert("Not a TRIANGLE!")
}else if(base===height && base=== hypotenuse && height === hypotenuse){
alert("Equilateral triangle")
} else if (base === height || base === hypotenuse || height===hypotenuse){
alert("Isoceles triangle")
} else if (base + height > hypotenuse){
alert("scalene triangle")
}

