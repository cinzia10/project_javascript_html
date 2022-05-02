class Student{

    //FUNZIONE CHE ANDRA' A COSTRUIRE L'OBJECT
    constructor(name, surname, yob, gender, gradeArray){
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.gender = gender;
        this.gradesArray = gradeArray;
    }

};


calculateStudentMin() {
    let sum = 0;
    for (let i = 0; i < this.gradesArray.length; i++) {
        const grade = this.gradeArray[i];
        sum = sum + grade;
    }
    const min = sum / student.gradeArray.length;
    return min;
};
