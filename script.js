//scrolling effect 
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

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
}

//invoke func when DOM is loaded
document.addEventListener("DOMContentLoaded", smoothScroll);

//translating page function
function translatePage() {
    const targetLanguage = 'es'; //language i want is spanish

    // grab the entire content of the page
    let content = document.documentElement.outerHTML;

    // exclude words for better ux
    const wordsToPreserve = [ "portfolio", "zdc", "BookNook", "Eventsy" , "Web Dev Conference", "Pawwfect Heart Grooming" , "JS Tic-Tac-Toe", "Affirmations Daily", "JavaScript", "React.js", "Firebase", "linkedin", "calendly"]; 

    //replace the words, and assign placeholder
    const placeholders = {};
    wordsToPreserve.forEach((word, index) => {
        const placeholder = `__${index}__`;
        placeholders[placeholder] = word;
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        content = content.replace(regex, placeholder);
    });

    //making a post request to the translation api w unique key
    fetch('https://translation.googleapis.com/language/translate/v2?key=AIzaSyCZZ4Fcf3uAfZczR46WjoBqu9ivgmKBSBw', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: content,
            target: targetLanguage,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // replace placeholders w original words
        let translatedText = data.data.translations[0].translatedText;
        Object.entries(placeholders).forEach(([placeholder, word]) => {
            const regex = new RegExp(placeholder, 'g');
            translatedText = translatedText.replace(regex, word);
        });

        // replace original content with translated text
        document.documentElement.innerHTML = translatedText;
        document.documentElement.lang = 'es'; //language is spanish, again
        
        // re adding the scrolling effect
        smoothScroll();

        window.scrollTo(0, 0); // i want it to scroll to the top of the page once translated
    })
    .catch(error => console.error('Error:', error));
}


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

//hamburger menu for when responsive
function toggleMenu() {
    var links = document.querySelector('.links');
    links.classList.toggle('active'); // active class toggled
}