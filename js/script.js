const shape = document.getElementById('shape');
const message = document.getElementById('message');

let isRectangle = true;
let position = 0;
let moveRight = true;

shape.addEventListener('click', () => {
    if (isRectangle) {
        position += 500;
        shape.style.transform = `translateX(${position}px)`;
        shape.style.borderRadius = '50%';
        shape.style.backgroundColor = 'orange';
        isRectangle = false;
    }
});

shape.addEventListener('dblclick', () => {
    if (!isRectangle) {
        moveRight = !moveRight;
        moveCircle();
    }
});

shape.addEventListener('mouseover', () => {
    if (!isRectangle) {
        shape.style.backgroundColor = 'violet';
        message.textContent = 'Bonjour Giovani Moukoko vous êtes dans le cercle';
    }
});

shape.addEventListener('mouseout', () => {
    if (!isRectangle) {
        shape.style.backgroundColor = 'orange';
        message.textContent = 'Bonjour Giovani Moukoko vous êtes hors du cercle';
    }
});

function moveCircle() {
    const moveAmount = 10;
    let moveInterval = setInterval(() => {
        if (moveRight) {
            position += moveAmount;
            shape.style.transform = `translateX(${position}px)`;
        } else {
            position -= moveAmount;
            shape.style.transform = `translateX(${position}px)`;
        }

        if (position > window.innerWidth - 400) {
            moveRight = false;
        } else if (position < 0) {
            moveRight = true;
        }
    }, 20);
}
