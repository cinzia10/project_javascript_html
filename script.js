//CREAZIONE OBJECT SENZA LA CLASS
const grades = [8,3,8,6];

const student1 = {
    name: "Cinzia",
    surname: "Ariotti",
    yob: 1996,
    gender: "F",
    gradeArray: grades,
};

//FUNZIONE PER CALCOLARE IL VOTO MINIMO
// function calculateStudentMin(student){
//     let sum = 0;
//     for (let i = 0; i < student.gradeArray.length; i++) {
//         const grade = student.gradeArray[i];
//         sum = sum + grade;
//     }
//     const min = sum / student.gradeArray.length;
//     return min;
// }

// console.log(calculateStudentMin(student1));



//CREAZIONE OBJECT CON LA CLASS

const student = new Student('Cinzia', 'Ariotti', 1996, 'F', grades);
console.log(student);