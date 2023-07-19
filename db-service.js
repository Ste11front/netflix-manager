class DBService{


    static BASE_URL = "https://64b512c5f3dbab5a95c6a4c2.mockapi.io"

    static getAllShows(){
        const url =  DBService.BASE_URL+'/shows';
        return fetch(url)
              .then(resp => resp.json())
              .then(result => this.convertToShowsArray(result))
              .catch(error=>console.log(error));
    }

    static convertToShows(object){
        const newShow = new Show(object.title,object.creationDate,object.author,object.imageUrl,object.isFinished,object.upVotes,object.downVotes,object.id);
        return newShow;
    }

    static convertToShowsArray(genericArray){ 
        const tempArray=[];  

        for (const object of genericArray) {

            tempArray.push(this.convertToShows(object));
        }

        return tempArray;
    }

}