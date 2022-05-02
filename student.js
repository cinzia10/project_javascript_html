class Student{

    //FUNZIONE CHE ANDRA' A COSTRUIRE L'OBJECT
    constructor(name, surname, yob, gender, gradeArray){
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.gender = gender;
        this.gradesArray = gradeArray;
    }

    //FUNZIONE PER CALCOLARE LA MEDIA DEI VOTI
    calculateStudentMin() {
        let sum = 0;
        for (let i = 0; i < this.gradesArray.length; i++) {
            const grade = this.gradesArray[i];
            sum = sum + grade;
        }
        const min = sum / this.gradesArray.length;
        return min;
    };

    //FUNZIONE PER CALCOLARE L'ETA'
    calculateAge(){
        const now = new Date();
        const year = now.getFullYear();
        const age = year-this.yob;
        return age;
    };

    //FUNZIONE PER TRASFORMARE L'OBJECT IN STRINGA
    toString(){
        const genere = this.gender === "F"?"Femmina":"Maschio";
        const studentString =   "Nome: " + this.name + "\n" + 
                                "Cognome: " + this.surname + "\n" + 
                                "Età: " + this.calculateAge() + "\n" + 
                                "Genere: " + genere + "\n" +
                                "Media voti: " + this.calculateStudentMin();
        return studentString;
    }
}