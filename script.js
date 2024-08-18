function createGrid (resolution)  {
    let container = document.querySelector('.container');
    let pixels = []
    cleanGrid();
    for (let i = 0; i< resolution; i++) {
        pixels.push(document.createElement('div'));
        pixels[i].className = 'pixel';``
        pixels[i].id = i+1;
        pixels[i].style.flex = `1 1 ${(100/Math.sqrt(resolution)-1)}%`
        container.appendChild(pixels[i]);
    }
}

function changeColor(target){
    let id = target.id;
    overedSquare = document.getElementById(id);
    if (overedSquare != null) {
        overedSquare.style.backgroundColor = 'black';
    }
}

function createEventHover (){
    let container = document.querySelector('.container');
    
    container.addEventListener('mouseover', (event) => {
        let target = event.target;
        changeColor(target);
    });
}

function cleanGrid(){
    let container = document.querySelector('.container');
    container.innerHTML = '';
}

function getResolution (){
    btn = document.querySelector('.resolution');
    btn.addEventListener('click', (event) => {
        resolution = prompt('What resolution do you want');
        resolution = Number(resolution);
        if (resolution > 0){
            if (resolution >= 100) {
                createGrid(100);
            }
            else {
                createGrid(resolution);
            }
        }
        else {
            createGrid(16);
        }
    });
}

getResolution();
createGrid(16);
createEventHover();
