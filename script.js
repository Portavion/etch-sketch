function createGrid (resolution)  {
    let container = document.querySelector('.container');
    let pixels = []
    
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



createGrid(49);
createEventHover();
