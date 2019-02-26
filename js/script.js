function triangle_tracker() {
    var aaa = document.getElementById('a').value;
    var bbb = document.getElementById('b').value;
    var ccc = document.getElementById('c').value;
  
    var a = parseInt(aaa);
    var b = parseInt(bbb);
    var c = parseInt(ccc);
    var dimensions = []
    dimensions.push(a, b, c)
  
    if (a + b <= c) {
      alert( "( "+ dimensions +" )" + "= Not a TRIANGLE!");
    } else if (a === b && a === c && b === c) {
      alert("( "+ dimensions +" )"  +"= Equilateral triangle");
    } else if (a === b || a === c || b === c) {
      alert("( "+ dimensions +" )" +"= Isoceles triangle");
    } else if (a != b && a != c && b != c && a + b > c) {
      alert("( "+ dimensions +" )"  + "=i scalene triangle");
    };
  };