function triangle_tracker(){ 
    var aaa= document.getElementById ('a').value;
    var bbb= document.getElementById('b').value;
    var ccc= document.getElementById('c').value;

    var a = parseInt(aaa);
    var b = parseInt(bbb);
    var c = parseInt(ccc);

    if (a + b <= c) {
    alert("Not a TRIANGLE!");
    }else if(a=== b && a=== c && b === c){
    alert("Equilateral triangle");
    } else if (a === b || a === c || b===c){
    alert("Isoceles triangle");
    } else if (a + b > c){
    alert("scalene triangle");
    };
};
