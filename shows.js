class Show {
    constructor(title,creationDate= new Date(),author,imageUrl,isFinished = false,upVotes = 0,downVotes = 0,id){
        this.title=title;
        this.creationDate=creationDate;
        this.author=author;
        this.imageUrl=imageUrl;
        this.isFinished=isFinished;
        this.upVotes=upVotes;
        this.downVotes=downVotes;
        this.id=id;
    }

}