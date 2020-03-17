

const requestUrl = "http://andrewcombs13.com/dev/projectIdeas/Ideas.json";
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
    sortIdeas("newestFirst");
}

function generateIdeaArray(jsonObj) {
    const ideas = jsonObj['ideas'];

    let ideaArray = [];

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

        ideaArray.push(listItem);
    }

    return ideaArray;
}

function showList(ideaArray) {
    const ideasList = document.querySelector('#IdeaList');

    let newIdeasList = document.createElement('ul');
    newIdeasList.setAttribute('id', 'IdeaList');

    ideaArray.forEach(idea => newIdeasList.appendChild(idea));

    ideasList.parentNode.replaceChild(newIdeasList, ideasList);
}

function sortIdeas(sortOrder) {
    if(request.response !== null)
    {
        let ideaArray;
        switch(sortOrder)
        {
            case "newestFirst":
                ideaArray = generateIdeaArray(request.response);
                ideaArray.reverse();
                showList(ideaArray);
                break;
            case "oldestFirst":
            default:
                ideaArray = generateIdeaArray(request.response);
                showList(request.response);
                break;
        }
    }
    else
    {
        console.log("No response yet!");
    }
}