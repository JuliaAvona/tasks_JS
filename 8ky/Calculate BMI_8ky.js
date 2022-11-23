function bmi(weight, height) {
    let bmiForm = weight / (height * height);
    if (bmiForm <= 18.5) {
        return "Underweight";
    } else if (bmiForm <= 25.0) {
        return "Normal";
    } else if (bmiForm <= 30.0) {
        return "Overweight";
    } else if (bmiForm > 30) {
        return "Obese";
    }
}


  /*

Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"

   */