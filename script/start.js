const targetURL = "main.html";
const idleDuration = 20000;
const fadeDuration = 500; 

let idleTimer;
const linkElement = document.getElementById('ecoLink');
const contentWrapper = document.getElementById('contentWrapper');
const startScreen = document.getElementById('startScreen');

function navigateWithFade(url) {
    clearTimeout(idleTimer);

    contentWrapper.classList.add('fade-out-text');

    startScreen.classList.add('fade-out-bg'); 

    setTimeout(() => {
        window.location.href = url;
    }, fadeDuration);
}

function startIdleTimer() {
    clearTimeout(idleTimer); 
    idleTimer = setTimeout(() => {
        console.log("Idle for 20s. Redirecting automatically.");
        navigateWithFade(targetURL);
    }, idleDuration);
}

window.onload = startIdleTimer;

linkElement.addEventListener('click', function(event) {
    event.preventDefault();
    
    console.log("Link clicked. Redirecting with fade out.");
    navigateWithFade(targetURL);
});
if (performance.navigation.type === 2) {
}
