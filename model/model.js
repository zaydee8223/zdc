// project thumbnails array
const projects = [
    {
        name: "Travel Dreamscape",
        detName: "travel-dreamscape",
        date: "Fall 2024",
        heroImage: "../../images/travel-dreamscape/zdc-td-hero.png",
        firstImage: "./images/thumbnails/zdc-travel-dreamscape-thumb.png",
        secondImage: "./images/travel-dreamscape/zdc-td-logSign.png",
        cImageOne: "./images/travel-dreamscape/zdc-td-mainDes.png",
        cImageTwo: "./images/travel-dreamscape/zdc-td-addDes.png",
        cImageThree: "./images/travel-dreamscape/zdc-td-vDesSite.png",
        thumbImage: "../../images/thumbnails/zdc-travel-dreamscape-thumb.png",
        firstDescrip: "Travel Dreamscape is a web application designed to transform your travel dreams intp a personal, interactive itinerary. Whether you're planning a weekend getaway or a month-long world tour, Travel Dreamscape helps you organize destinations, add the specific sites you want to visit, and keep track of your travel plans - all in one place.",
        secondDescrip: "To use Travel Dreamscape, sign up and log in to access your personal dashboard. Add destinations by clicking the “+” button, entering details, and uploading an image. View and edit trips anytime, and within each destination, add specific sites to visit. Easily update or remove destinations and sites, with real-time changes ensuring your itinerary stays current. With a seamless interface, Travel Dreamscape makes travel planning effortless.",
        webLink: "https://travel-dreamscape.web.app/",
        alt: "zdc - Travel Dreamscape",
    },

    {
        name: "Indiana Chapter - American College of Emergency Physicians",
        detName: "inacep",
        date: "Fall 2024",
        heroImage: "../../images/inacep/zdc-inacep-hero.jpg",
        firstImage: "./images/thumbnails/zdc-inacep-thumb.png",
        secondImage: "./images/inacep/zdc-inacep-bod.png",
        cImageOne: "./images/inacep/zdc-inacep-donate.png",
        cImageTwo: "./images/inacep/zdc-inacep-iempac.png",
        cImageThree: "./images/inacep/zdc-inacep-contact.png",
        thumbImage: "../../images/thumbnails/zdc-inacep-thumb.png",
        firstDescrip: "The Indiana Chapter of the American College of Emergency Physicians (INACEP) advocates for emergency physicians and patients across the state. Serving over 600 members, INACEP provides essential resources, including updates on continuing education, legislative advocacy, and membership benefits. The organization is dedicated to improving emergency care in Indiana by supporting physicians and ensuring patients receive high-quality treatment. Its website serves as a critical hub for information, networking, and professional development.",
        secondDescrip: "I worked as the project manager and lead designer alongside two other developers to redesign INACEP’s outdated website. Our goal was to modernize the site, improve navigation, and enhance user engagement. We analyzed the existing site, researched best practices from other medical organizations, and implemented the redesign using HTML, CSS, SASS/SCSS, PHP, and WordPress. We developed a functional prototype, integrated custom plugins, and migrated the new design to a staging environment for testing, ensuring a seamless and user-friendly experience for INACEP members.",
        webLink: "https://staging.inacep.org/",
        alt: "zdc - INACEP",
    },

    {
        name: "Eventsy",
        detName: "eventsy",
        date: "Spring 2023",
        heroImage: "../../images/eventsy/zdc-eventsy-hero.png",
        firstImage: "./images/thumbnails/zdc-eventsy-thumb.png",
        secondImage: "./images/eventsy/zdc-eventsy-about.png",
        cImageOne: "./images/eventsy/zdc-eventsy-gallery.png",
        cImageTwo: "./images/eventsy/zdc-eventsy-blog.png",
        cImageThree: "./images/eventsy/zdc-eventsy-contact.png",
        thumbImage: "../../images/thumbnails/zdc-eventsy-thumb.png",
        firstDescrip: "Eventsy is a dynamic event management web application designed to simplify the planning process with a seamless, user-friendly experience. It adapts effortlessly to user needs, ensuring smooth functionality and intuitive navigation. By focusing on both aesthetics and performance, Eventsy enhances event organization, making it more efficient and accessible across all devices.",
        secondDescrip: "This project marked my first experience developing an intermediate-level web application, where I worked extensively with SASS and jQuery to create a polished, interactive site. It was a significant step in advancing my front-end development skills, challenging me to refine my approach to responsive design and user engagement. Through Eventsy, I gained valuable experience in building a feature-rich application while maintaining clean, maintainable code.",
        webLink: "https://n215-zadomin.github.io/final-project/",
        alt: "zdc - Eventsy",
    },

    {
        name: "BookNook",
        detName: "booknook",
        date: "Fall 2023",
        heroImage: "../../images/booknook/zdc-booknook-hero.png",
        firstImage: "./images/booknook/zdc-booknook-home.png",
        secondImage: "./images/booknook/zdc-booknook-about.png",
        cImageOne: "./images/booknook/zdc-booknook-books.png",
        cImageTwo: "./images/booknook/zdc-booknook-logSign.png",
        cImageThree: "./images/booknook/zdc-booknook-blog.png",
        thumbImage: "../../images/thumbnails/zdc-booknook-thumb.png",
        firstDescrip: "BookNook is an online bookstore and literary hub designed for seamless browsing and discovery. More than just a place to shop for books, it features an interactive blog and user accounts, allowing readers to save their carts and personalize their experience. With a focus on accessibility and ease of use, BookNook creates a welcoming space for book lovers to explore new reads and engage with literary content.",
        secondDescrip: "As a collaborative project, BookNook challenged us to build a functional e-commerce simulation with a shopping cart system, user authentication, and blog integration. We focused on performance optimization and intuitive design, ensuring smooth navigation and an engaging user experience. This project was a key learning experience in balancing front-end interactivity with back-end functionality, making BookNook a well-rounded and immersive platform for book enthusiasts.",
        webLink: "https://book-nook-ol.netlify.app/",
        alt: "zdc - BookNook",
    },

];

//function that contains all conrenr for site
export function getPageContent(pageID) {
    switch(pageID) {
        //home 
        case "home":
            return `
    <!-- home content -->
    <section> 
        <div class="home-content">
            <!-- image of me -->
            <div class="home-img-parent">
                <div class="home-img"></div>
            </div>

            <!-- text next to it -->
             <div class="home-text-parent">
                <!-- upper content -->
                 <div class="home-upper-text">
                    <div class="upper-text">Hello,</div>
                    <div class="upper-line"></div>
                 </div>

                 <!-- botton content -->
                  <div class="bottom-text">I'm a <span id="home-per-title"> Full-Stack Developer</span> based out of <span id="home-per-based"> Houston, TX.</span> I am passionate about creating impactful <span id="home-emph">digital</span> experiences through <span class="code-des">code</span> and <span class="code-des">design</span>.</div>
                  <img src="./images/zdc-down-arrow.png" alt="zdc - down arrow">
                </div>
        </div>
    </section>

    <!-- projects on home -->
    <section style="margin-bottom: 300px; margin-top: 50px">
        <p class="proj-header">Recent Work</p>
        <!-- holder for all thumbnails on page -->
        <div class="proj-thumbs-parent"></div>
    </section>`;

        //about
        case "about":
            return `<section>
              <div class="about-content">
            <div class="about-upper-content">
                <p class="about-header">About</p>
                <div class="about-line"></div>
            </div>
            <p class="about-main-header">Creating with purpose. Driven by passion. </p>
            <p class="about-main-description"> From a young age, I have been fascinated by technology and its capabilities. My journey into web development began at age 11, setting the foundation for a lifelong pursuit. Whether I'm building projects myself or helping others explore and find their voice in tech, I strive to create with purpose—and most of all, <span class="about-bold">passion</span>.</p> 
            <p class="about-main-description">As a First-Generation Mexican American, I’ve navigated the challenges of breaking into tech with resilience and determination. My background has given me a deep appreciation for community, innovation, and the power of representation. I am committed not only to mastering both front-end and back-end technologies but also to advocating for diversity, equity, and inclusion in tech.</p>
            <p class="about-main-description">Beyond programming, I love traveling, photography, concerts, and discovering new music. Let's connect and create something great.</p>
            <div class="about-main-line"></div>
        </div>
    </section>`;

        //contact 
        case "contact":
            return `<section>
        <div class="contact-content">
      <div class="contact-upper-content">
          <p class="contact-header">Contact</p>
          <div class="contact-line"></div>
      </div>
      <p class="contact-main-header">Let's connect and create something great. </p>
      <div class="contact-form">
        <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact"> 
            <label for="fname">First Name:</label>
            <input type="text" id="fname">

            <label for="lname">Last Name:</label>
            <input type="text" id="lname">

            <label for="email">Email Address:</label>
            <input type="email" id="email">

            <label for="message">Message:</label>
            <textarea id="message"></textarea>

            <button type="submit"id="contact-submit">Submit</button>  
        </form>
      </div>

      <div class="contact-main-line"></div>

      <div class="contact-bottom-direct">
        <div class="contact-email">
            <a href="mailto:zaydominguez8223@gmail.com" target="_blank">zaydominguez8223@gmail.com</a>
        </div>
        <div class="contact-resume">
            <a href="./images/zdc-resume.pdf" target="_blank">Download CV</a>

        </div>
      </div>
  </div>
  </section>`;

        //travel dreamscape details
        case "travel-dreamscape" :
            return `<section>
            <div class="project-details-content">
                <div class="project-details-hero" style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${projects[0].heroImage}');">
                    <div class="project-details-text">
                        <!-- date of project -->
                    <p class="project-details-date">${projects[0].date}</p>
                    <!-- name of project -->
                    <p class="project-details-title">${projects[0].name}</p>
                    <!-- this stays static, will not change -->
                    <p class="project-details-scroll">Scroll <i class="fa-solid fa-arrow-down"></i></p>  
                    </div>
                </div>

                <div class="project-details-bottom">
                    <div class="project-details-bottom-item">
                        <div class="proj-dets-bottom-text">
                            <!-- first description goes here -->
                        <p class="proj-dets-bottm-text-item">${projects[0].firstDescrip}</p>
                        </div>
                        <div class="proj-dets-bottom-img">
                            <img src="${projects[0].firstImage}" alt="${projects[0].alt}">
                        </div>
                    </div>

                    <div class="project-details-bottom-item">

                        <div class="proj-dets-bottom-img">
                            <!-- second image goes here -->
                            <img src="${projects[0].secondImage}" alt="${projects[0].alt}">
                        </div>

                        <div class="proj-dets-bottom-text">
                            <!-- second description goes here -->
                        <p class="proj-dets-bottm-text-item">${projects[0].secondDescrip}</p>
                    </div>
                    
                    </div>

                    <div class="project-details-bottom-slideshow-parent">
                        <div class="proj-dets-bottom-slide-parent">

                            <div class="proj-dets-bottom-slide">
                                <!-- cImageOne goes here -->
                                <img src="${projects[0].cImageOne}" alt="${projects[0].alt}">

                                
                            </div>

                            <div class="proj-dets-bottom-slide">
                                <!-- cImageTwo goes here -->
                                <img src="${projects[0].cImageTwo}" alt="${projects[0].alt}" >

                                
                            </div>

                            <div class="proj-dets-bottom-slide">
                                <!-- cImageThree goes here -->
                                <img src="${projects[0].cImageThree}" alt="${projects[0].alt}" >
                            </div>

                        </div>
                        <!-- link to site -->
                        <a href="${projects[0].webLink}" id="website-link" target="_blank">Visit Official Site</a>
                    </div>
                </div>

                 <!-- arrow to go next or previous -->
             <div class="project-details-prev-next">
                <div class="proj-dets-next-parent">
               <a href="#${projects[1].detName}"><p class="proj-dets-prev-next-text" style="text-transform:uppercase">${projects[1].detName}</p></a>
                    <img src="./images/right-arrow.png" alt="">
                </div>
             </div>
                </div>
        
        </section>`;

          //inacep details
        case "inacep" :
            return `<section>
            <div class="project-details-content">
                <div class="project-details-hero" style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${projects[1].heroImage}');">
                    <div class="project-details-text">
                        <!-- date of project -->
                    <p class="project-details-date">${projects[1].date}</p>
                    <!-- name of project -->
                    <p class="project-details-title">${projects[1].name}</p>
                    <!-- this stays static, will not change -->
                    <p class="project-details-scroll">Scroll <i class="fa-solid fa-arrow-down"></i></p>  
                    </div>
                </div>

                <div class="project-details-bottom">
                    <div class="project-details-bottom-item">
                        <div class="proj-dets-bottom-text">
                            <!-- first description goes here -->
                        <p class="proj-dets-bottm-text-item">${projects[1].firstDescrip}</p>
                        </div>
                        <div class="proj-dets-bottom-img">
                            <img src="${projects[1].firstImage}" alt="${projects[1].alt}">
                        </div>
                    </div>

                    <div class="project-details-bottom-item">

                        <div class="proj-dets-bottom-img">
                            <!-- second image goes here -->
                            <img src="${projects[1].secondImage}" alt="${projects[1].alt}">
                        </div>

                        <div class="proj-dets-bottom-text">
                            <!-- second description goes here -->
                        <p class="proj-dets-bottm-text-item">${projects[1].secondDescrip}</p>
                    </div>
                    
                    </div>

                    <div class="project-details-bottom-slideshow-parent">
                        <div class="proj-dets-bottom-slide-parent">

                            <div class="proj-dets-bottom-slide">
                                <!-- cImageOne goes here -->
                                <img src="${projects[1].cImageOne}" alt="${projects[1].alt}">

                                
                            </div>

                            <div class="proj-dets-bottom-slide">
                                <!-- cImageTwo goes here -->
                                <img src="${projects[1].cImageTwo}" alt="${projects[1].alt}" >

                                
                            </div>

                            <div class="proj-dets-bottom-slide">
                                <!-- cImageThree goes here -->
                                <img src="${projects[1].cImageThree}" alt="${projects[1].alt}" >
                            </div>

                        </div>
                        <!-- link to site -->
                        <a href="${projects[1].webLink}" id="website-link" target="_blank">Visit Official Site</a>
                    </div>
                </div>
                <!-- arrow to go next or previous -->
             <div class="project-details-prev-next">
                <div class="proj-dets-prev-parent">
                         <img src="./images/left-arrow.png" alt="">
                         <a href="#${projects[0].detName}"><p class="proj-dets-prev-next-text">${projects[0].name}</p></a>
                     </div>
                <div class="proj-dets-next-parent">
               <a href="#${projects[2].detName}"><p class="proj-dets-prev-next-text">${projects[2].name}</p></a>
                    <img src="./images/right-arrow.png" alt="">
                </div>
             </div>
                </div>
        
        </section>`;

         //eventsy details
         case "eventsy" :
            return `<section>
            <div class="project-details-content">
                <div class="project-details-hero" style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${projects[2].heroImage}');">
                    <div class="project-details-text">
                        <!-- date of project -->
                    <p class="project-details-date">${projects[2].date}</p>
                    <!-- name of project -->
                    <p class="project-details-title">${projects[2].name}</p>
                    <!-- this stays static, will not change -->
                    <p class="project-details-scroll">Scroll <i class="fa-solid fa-arrow-down"></i></p>  
                    </div>
                </div>

                <div class="project-details-bottom">
                    <div class="project-details-bottom-item">
                        <div class="proj-dets-bottom-text">
                            <!-- first description goes here -->
                        <p class="proj-dets-bottm-text-item">${projects[2].firstDescrip}</p>
                        </div>
                        <div class="proj-dets-bottom-img">
                            <img src="${projects[2].firstImage}" alt="${projects[2].alt}">
                        </div>
                    </div>

                    <div class="project-details-bottom-item">

                        <div class="proj-dets-bottom-img">
                            <!-- second image goes here -->
                            <img src="${projects[2].secondImage}" alt="${projects[2].alt}">
                        </div>

                        <div class="proj-dets-bottom-text">
                            <!-- second description goes here -->
                        <p class="proj-dets-bottm-text-item">${projects[2].secondDescrip}</p>
                    </div>
                    
                    </div>

                    <div class="project-details-bottom-slideshow-parent">
                        <div class="proj-dets-bottom-slide-parent">

                            <div class="proj-dets-bottom-slide">
                                <!-- cImageOne goes here -->
                                <img src="${projects[2].cImageOne}" alt="${projects[2].alt}">

                                
                            </div>

                            <div class="proj-dets-bottom-slide">
                                <!-- cImageTwo goes here -->
                                <img src="${projects[2].cImageTwo}" alt="${projects[2].alt}" >

                                
                            </div>

                            <div class="proj-dets-bottom-slide">
                                <!-- cImageThree goes here -->
                                <img src="${projects[2].cImageThree}" alt="${projects[2].alt}" >
                            </div>

                        </div>
                        <!-- link to site -->
                        <a href="${projects[2].webLink}" id="website-link" target="_blank">Visit Official Site</a>
                    </div>
                </div>
                <!-- arrow to go next or previous -->
             <div class="project-details-prev-next">
                <div class="proj-dets-prev-parent">
                         <img src="./images/left-arrow.png" alt="">
                         <a href="#${projects[1].detName}"><p class="proj-dets-prev-next-text" style="text-transform:uppercase">${projects[1].detName}</p></a>
                     </div>
                <div class="proj-dets-next-parent">
               <a href="#${projects[3].detName}"><p class="proj-dets-prev-next-text">${projects[3].name}</p></a>
                    <img src="./images/right-arrow.png" alt="">
                </div>
             </div>
                </div>
        
        </section>`;

        //booknook details
         case "booknook" :
            return `<section>
            <div class="project-details-content">
                <div class="project-details-hero" style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${projects[3].heroImage}');">
                    <div class="project-details-text">
                        <!-- date of project -->
                    <p class="project-details-date">${projects[3].date}</p>
                    <!-- name of project -->
                    <p class="project-details-title">${projects[3].name}</p>
                    <!-- this stays static, will not change -->
                    <p class="project-details-scroll">Scroll <i class="fa-solid fa-arrow-down"></i></p>  
                    </div>
                </div>

                <div class="project-details-bottom">
                    <div class="project-details-bottom-item">
                        <div class="proj-dets-bottom-text">
                            <!-- first description goes here -->
                        <p class="proj-dets-bottm-text-item">${projects[3].firstDescrip}</p>
                        </div>
                        <div class="proj-dets-bottom-img">
                            <img src="${projects[3].firstImage}" alt="${projects[3].alt}">
                        </div>
                    </div>

                    <div class="project-details-bottom-item">

                        <div class="proj-dets-bottom-img">
                            <!-- second image goes here -->
                            <img src="${projects[3].secondImage}" alt="${projects[3].alt}">
                        </div>

                        <div class="proj-dets-bottom-text">
                            <!-- second description goes here -->
                        <p class="proj-dets-bottm-text-item">${projects[3].secondDescrip}</p>
                    </div>
                    
                    </div>

                    <div class="project-details-bottom-slideshow-parent">
                        <div class="proj-dets-bottom-slide-parent">

                            <div class="proj-dets-bottom-slide">
                                <!-- cImageOne goes here -->
                                <img src="${projects[3].cImageOne}" alt="${projects[3].alt}">

                                
                            </div>

                            <div class="proj-dets-bottom-slide">
                                <!-- cImageTwo goes here -->
                                <img src="${projects[3].cImageTwo}" alt="${projects[3].alt}" >

                                
                            </div>

                            <div class="proj-dets-bottom-slide">
                                <!-- cImageThree goes here -->
                                <img src="${projects[3].cImageThree}" alt="${projects[3].alt}" >
                            </div>

                        </div>
                        <!-- link to site -->
                        <a href="${projects[3].webLink}" id="website-link" target="_blank">Visit Official Site</a>
                    </div>
                </div>
                    <!-- arrow to go next or previous -->
             <div class="project-details-prev-next">
                <div class="proj-dets-prev-parent">
                         <img src="./images/left-arrow.png" alt="">
                         <a href="#${projects[2].detName}"><p class="proj-dets-prev-next-text">${projects[2].name}</p></a>
                     </div>
             </div>
                </div>
        </section>`;

        


            //if no page found
            default:
                return `<h1> 404 - Page Not Found</h1>`;
    }
}




//function to dynamically load projects
export function loadPortfolioProjects() {

    let projectContainer = $(".proj-thumbs-parent");
    //clear any exsiting content
    projectContainer.empty();

    //for each to loop through each project and add its thumbnail and name
    $.each(projects, function (idx, project) {
        let projItem = `
        <a href="#${project.detName}" class="proj-item">
            <div class="proj-thumbnail" style="background-image: url('${project.thumbImage}');">
                <div class="proj-text">${project.name}</div>
            </div>
        </a>`;
        projectContainer.append(projItem);
    });
}

//function to change the color of nav when on projects
export function changeNavColor(color) {

    $("nav a").css({
        "transition": "color 0.5s ease-in-out",
        "color": color
    });

    $(".links a").css({
        "transition": "color 0.5s ease-in-out",
        "color": color
    });
}

//function to reset the nav color back to default
export function resetNavColor(){
    $("nav a").css({
        "transition": "color 0.5s ease-in-out",
        "color": "#000"
    });

    $(".links a").css({
        "transition": "color 0.5s ease-in-out",
        "color": "#000"
    });
}

//function to highlight the active nav link
export function highlightActiveNavLink() {
    let hashTag = window.location.hash;

    //reset all links
      $(".links a").css({
        "text-decoration": "none"
    });

    //apply underline to the active page
    if (hashTag === "#about") {
        $("#about").css({
            "text-decoration": "underline",
            "text-decoration-thickness": "1px",
           "text-underline-position": "under"
        });

    } else if (hashTag === "#contact") {
        $("#contact").css({
            "text-decoration": "underline",
            "text-decoration-thickness": "1px",
           "text-underline-position": "under"
        });
    }
}