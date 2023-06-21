let contentElement = document.getElementById('content');
contentElement.addEventListener('click', (e) => {
    if(e.currentTarget.style.color === 'white') {
        e.currentTarget.style.color = 'red';
    }else {
        e.currentTarget.style.color = 'white';
    }
})