function getGrade(score) {
    if (score >= 90 && score <= 100) {
        console.log("A+");
    } else if (score >= 75 && score < 90) {
        console.log("B")
    } else if (score >=60 && score < 75) {
        console.log("C")
    } else {
        console.log("D")
    }
        
    

}
getGrade(81);