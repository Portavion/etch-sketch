function createGrid (resolution)  {
    let container = document.querySelector('.container');
    let pixels = []
    
    for (let i = 0; i< resolution; i++) {
        pixels.push(document.createElement('div'));
        pixels[i].className = 'pixel';
        pixels[i].style.flex = `1 1 ${(100/Math.sqrt(resolution)-1)}%`
        container.appendChild(pixels[i]);``
    }
}

createGrid(16);