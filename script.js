const heapware = document.querySelector('.heapware-section');
const svg = document.querySelector('.heapware-png');
// const apple = document.querySelector('.apple-img');
const apple_animation = document.querySelector('.apple-animation');
const linux_animation = document.querySelector('.linux-animation');
const swift_animation = document.querySelector('.swift-animation');
const django_animation = document.querySelector('.django-animation');
const javascript_animation = document.querySelector('.javascript-animation');


function justScroll() {
    
    // svg.style.backgroundColor = 'red'
    svg.style.transform = 'rotate(360deg)';
    javascript_animation.style.transform = 'rotate(360deg)';
    swift_animation.style.transform = 'rotate(360deg)';
    apple_animation.style.transform = 'rotate(360deg)';
    linux_animation.style.transform = 'rotate(360deg)';
    django_animation.style.transform = 'rotate(360deg)';
    javascript_animation.style.transform = 'translate(190px, 290px)'
    javascript_animation.style.transition = '2s ease'
    linux_animation.style.transform = 'translate(390px, -190px)'
    linux_animation.style.transition = '2s ease'
    swift_animation.style.transform = 'translate(-310px, 290px)'
    swift_animation.style.transition = '2s ease'
    django_animation.style.transform = 'translate(-600px, -70px)'
    django_animation.style.transition = '2s ease'
    apple_animation.style.transform = 'translate(200px, 20px)'
    apple_animation.style.transition = '2s ease'
    // svg.style.backgroundColor = 'red'
    svg.style.transition = '2s ease'
}
