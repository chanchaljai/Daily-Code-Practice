function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A+";
    } else if (score >= 75 && score < 90) {
        return "B";
    } else if (score >= 60 && score < 75) {
        return "C";
    } else if (score >= 45 && score < 60) {
        return "D";
    } else if (score >= 0 && score < 45) {
        return "Fail";
    } else {
        return "Invalid Marks"
    }
 



}
console.log(getGrade(91));