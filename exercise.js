/// CREARE LA CLASSE 'ATHLETE' CON LE SEGUENTI PROPRIETA': NAME, SURNAME, YOB, SPORT, PALMARES, GENDER, ISRETIRED
/// E CON LE SEGUENTI FUNZIONI: GETAGE(), BESTRESULT(), TOSTRING()

class Athlete{
    
    constructor(name, surname, yob, gender, sport, palmares, isRetired){
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.gender = gender;
        this.palmares = palmares;
        this.sport = sport;
        this.isRetired = isRetired;
    };


    calculateAge(){
        const now = new Date();
        const year = now.getFullYear();
        const age = year-this.yob;
        return age;
    };

    bestResult(){
       return this.palmares.filter(this.keepBest);
    };

    keepBest(result){
        if (result<=3){
            return true
        } else {
            return false
        }
    }

    toString(){
        const genere = this.gender === "F"?"Femmina":"Maschio";
        const athleteString =   "Nome: " + this.name + "\n" + 
                                "Cognome: " + this.surname + "\n" + 
                                "Età: " + this.calculateAge() + "\n" + 
                                "Genere: " + genere + "\n"+
                                "Risultati Migliori: " + this.bestResult();
        return athleteString;
    }
}

