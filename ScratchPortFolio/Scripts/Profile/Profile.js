document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.getElementById('profile-pic');
    profilePic.style.backgroundImage = "url('your-photo.jpg')";
    profilePic.style.backgroundSize = 'cover';
    profilePic.style.backgroundPosition = 'center';

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            btn.style.transform = 'scale(1.05)';
        });
        btn.addEventListener('mouseout', () => {
            btn.style.transform = 'scale(1)';
        });
    });

    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Square animation
    const square = document.getElementById('square-animation');
    let posX = 0;
    const speed = 2;
    const maxWidth = window.innerWidth - 50;

    function animateSquare() {
        posX += speed;
        if (posX > maxWidth) posX = 0;
        square.style.left = posX + 'px';
        requestAnimationFrame(animateSquare);
    }

    animateSquare();

    console.log('Profile page loaded');
});