//Mausemove ve WheelEvent kullanimi
const alan = document.querySelector('.kutu');
alan.addEventListener('mousemove', e => {
    console.log(e);
    alan.textContent = `x: ${e.offsetX}, y: ${e.offsetY}`;
})

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})