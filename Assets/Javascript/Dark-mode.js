function lightMode(){
    const body = document.querySelector('body');
    if (body.classList.contains('light')){
        body.classList.remove('light');       
    } else {
        body.classList.add('light');
    }
}

const mobileCheckbox = document.getElementById('active');
mobileCheckbox.addEventListener('click', lightMode);