class Manager{
    constructor(showsArray=[]){
        this.showsArray=showsArray;

    }

    addShow(show){
        this.showsArray.push(show);
    }
}