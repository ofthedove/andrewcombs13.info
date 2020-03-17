

const requestUrl = "http://andrewcombs13.com/dev/projectIdeas/Ideas.json";
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
    sortList("newestFirst");
}

function generateIdeaArray(jsonObj) {
    const ideas = jsonObj['ideas'];

    let ideasArray = [];

    for(let i =  0; i < ideas.length; i++) {
        const listItem = document.createElement('li');
        const header = document.createElement('h3');
        const descDiv = document.createElement('div');

        header.textContent = ideas[i].name;

        const descParas = ideas[i].description;
        for(let j = 0; j < descParas.length; j++) {
            const p = document.createElement('p');
            p.textContent = descParas[j];
            descDiv.appendChild(p);
        }

        listItem.appendChild(header);
        listItem.appendChild(descDiv);

        ideasArray.push(listItem);
    }

    return ideasArray;
}

function showList(ideaArray) {
    const ideasList = document.querySelector('#IdeaList');

    let newIdeasList = document.createElement('ul');
    newIdeasList.setAttribute('id', 'IdeaList');

    ideaArray.forEach(idea => newIdeasList.appendChild(idea));

    ideasList.parentNode.replaceChild(newIdeasList, ideasList);
}

function sortList(sortOrder) {
    if(request.response !== null)
    {
        switch(sortOrder)
        {
            case "newestFirst":
                let ideaArray = generateIdeaArray(request.response);
                ideaArray.reverse();
                showList(ideaArray);
                break;
            case "oldestFirst":
            default:
                let ideaArray = generateIdeaArray(request.response);
                showList(request.response);
                break;
        }
    }
    else
    {
        console.log("No response yet!");
    }
}