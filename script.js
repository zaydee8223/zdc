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
