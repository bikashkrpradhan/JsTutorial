function bmi(weight,height){
    // var bmi = weight/(height*height);
    var bmi = weight/Math.pow(height,2);
    return bmi;
}

var mybmi = bmi(80,1.5);
console.log(mybmi);