function bmi(weight,height){
    var bmi = weight/(height*height);
    return bmi;
}

var mybmi = bmi(80,1.5);
console.log(mybmi);