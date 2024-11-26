// toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');
};




// secrol section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let linkToAddActive = document.querySelector('header nav a[href*="' + id + '"]');
                if (linkToAddActive) {
                    linkToAddActive.classList.add('active');
                }
            });
        }
    });
    /*sticky nabar*/
    let header = document.querySelector(header);
    
    header.classList.toggle('sticky', window.scrollY > 100);

    
        
       
    
};



// scrol raveal
ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skil-container, .galery-box, .contact form',{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1',{ origin: 'left' });
ScrollReveal().reveal('.home-content p',{ origin: 'right' });


// typed js
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Develover', 'Grapich Design'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});


// pop up

// Get elements
const form = document.getElementById('contactForm');
const modal = document.getElementById('popup');
const closeBtn = document.getElementById('closePopup');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Show the modal
    modal.style.display = 'flex';
});

// Event listener for closing the modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

