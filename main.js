// let manager = new Manager(DBService.getAllShows());


let manager;

DBService.getAllShows().then(shows => {
    manager = new Manager(shows);
    render();
});

// console.log(manager);






function render() {
    const showsContainer=document.getElementById('main-container'); 
    showsContainer.innerHTML= '';



    for (let i = 0; i <manager.showsArray.length; i++) {
        const show = manager.showsArray[i];

        const div = document.createElement('div');
        div.classList.add('card');
        
        console.log(show.title);

        div.appendChild(createElementWithString('strong',show.title));
        div.appendChild(createElementWithString('span',show.creationDate));
        div.appendChild(createElementWithString('span',show.author));



        div.appendChild(createElementWithString('img',show.imageUrl));

        
        const showImage = document.createElement('img');
        showImage.src(show.imageUrl);

        div.appendChild(showImage);


        div.appendChild(createElementWithString('span',show.isFinished));
        div.appendChild(createElementWithString('button',show.upVotes));
        div.appendChild(createElementWithString('button',show.downVotes));







        showsContainer.appendChild(div);
    }

}





function createElementWithString(elementName,contentString){
    const element = document.createElement(elementName);
    const node = document.createTextNode(contentString);
    element.appendChild(node);
    return element;
}