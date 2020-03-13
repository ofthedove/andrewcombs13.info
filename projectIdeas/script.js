const ideasList = document.querySelector('ul');

const requestUrl = "http://andrewcombs13.com/dev/projectIdeas/Ideas.json";
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
    const response = request.response;
    showList(response);
}

function showList(jsonObj) {
    const ideas = jsonObj['ideas'];

    for(let i = ideas.length - 1; i >= 0; i--) {
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

        ideasList.appendChild(listItem);
    }
}