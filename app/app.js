//import from model
import * as MODEL from "../model/model.js"; 

//handle routing based on url has
function route() {
    //get the hash from the current url
    let hashTag = window.location.hash;

    //remove the # from hash and use "home" as default if hash is empty
    let pageID = hashTag.replace("#", "") || "home";

    //get content for current page id using model function 
    const pageContent = MODEL.getPageContent(pageID);
    window.scrollTo(0, 0);

    //replace content in div app w new page content
    $("#app").html(pageContent);

    //re init any event listeners for new content
    initListeners();

    //define the project details pages
    const projectPages = ["travel-dreamscape", "inacep", "eventsy", "booknook"];

    //check if the current page is a project details page
    if(projectPages.includes(pageID)) {
        MODEL.changeNavColor("#ffffff");
    } else {
        MODEL.resetNavColor();
    }

    //highlight active nav link 
    MODEL.highlightActiveNavLink();
    
}

function initListeners() {
   
    //call function to load projects
    MODEL.loadPortfolioProjects();


    
}
 
$(document).ready(function () {
    //set up listener to call route whenever hash in url changes
    $(window).on("hashchange", route);

    //call the route function
    route();


});