//scrolling effect 
document.addEventListener("DOMContentLoaded", function() {

//select all ids or "hashes"
    const links = document.querySelectorAll('a[href^="#"]');

    //conduct a smooth scrolling for all hashes
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

//fading and typing transition
//waiting for dom to load
document.addEventListener("DOMContentLoaded", function() {
 
    
    //select elements needed
    var typingText = document.getElementById("fading-in");
    var moreAbout = document.getElementById("more-about").querySelector("a");
    

    //add the fading transition
    setTimeout(function() {
        typingText.classList.add("fade-in");
    }, 1000); 
    
    //after fade in, trigger typing
    setTimeout(function() {
        typeWriter(moreAbout, "→ More About Me", 100);
    }, 4000); 
});

//typing transition
function typeWriter(element, text, speed) {
    var i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}


//hamburger menu
// Function to toggle menu visibility
function toggleMenu() {
    var links = document.querySelector('.links');
    links.classList.toggle('active'); // Toggle 'active' class
}
