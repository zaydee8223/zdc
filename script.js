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

function translatePage() {
    const targetLanguage = 'es'; // language is spanish

    // grab the entire content of the page
    let content = document.documentElement.outerHTML;

    // exclude words for better UX
    const wordsToPreserve = ["portfolio", "zdc", "BookNook", "Eventsy", "Web Dev Conference", "Pawwfect Heart Grooming", "JS Tic-Tac-Toe", "Affirmations Daily", "JavaScript", "React.js", "Firebase", "linkedin", "calendly", "Git Version Control", "Adobe Creative Cloud", "resume",];

    //replace words and assign placeholders
    const placeholders = {};
    wordsToPreserve.forEach((word, index) => {
        const placeholder = `__${index}__`;
        placeholders[placeholder] = word;
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        content = content.replace(regex, placeholder);
    });

    // making a post request w unique api key
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
            //adjusting gender words to match fem
            let translatedText = data.data.translations[0].translatedText;
            // replace masc pronouns w fem pronouns
            translatedText = translatedText.replace(/\b(celoso|dedicado|catalítico|listo)\b/gi, match => {
                switch (match.toLowerCase()) {
                    case 'celoso':
                        return 'celosa';
                    case 'dedicado':
                        return 'dedicada';
                    case 'catalítico':
                        return 'catalítica';
                    case 'listo':
                        return 'lista';
                    default:
                        return match;
                }
            });

            // replace placeholders w original words
            Object.entries(placeholders).forEach(([placeholder, word]) => {
                const regex = new RegExp(placeholder, 'g');
                translatedText = translatedText.replace(regex, word);
            });

            //replace original content w translated content
            document.documentElement.innerHTML = translatedText;
            document.documentElement.lang = 'es'; 

            // re-add scrolling effect
            smoothScroll();

            window.scrollTo(0, 0); // scroll to top automatically
        })
        .catch(error => console.error('Error:', error));
}

//typing effect
document.addEventListener("DOMContentLoaded", function() {
    var typingText = document.getElementById("typing-text");
    var caret = typingText.nextElementSibling;
    caret.style.width = window.getComputedStyle(typingText).getPropertyValue('width');
});


//hamburger menu for when responsive
function toggleMenu() {
    var links = document.querySelector('.links');
    links.classList.toggle('active'); // active class toggled
}