//Declare the navagation items in an array
let navListItems = ["section_1", "section_2", "section_3", "section_4"];
const navBar = document.createElement("nav");
const newList = document.createElement("ul");

//Loop through referenced array of navagation items
for (let i = 0; i <= navListItems.length - 1; i++) {
    const newListItem = document.createElement('li');
    const newItemBtn = document.createElement("button")
    //Append button to this li
    newListItem.appendChild(newItemBtn);
    //Set class and id of this button
    newItemBtn.setAttribute("class", "navBtn");
    newItemBtn.setAttribute("id", navListItems[i] + "_Btn");
    //Set text to corresponding section
    newItemBtn.innerText = navListItems[i];
    //Append li to unordered list
    newList.appendChild(newListItem);
}
//Append nav to body and created list to nav
document.body.appendChild(navBar);
navBar.appendChild(newList);

//Get array of buttons in nav
const buttons = document.querySelectorAll('.navBtn');
//Loop through buttons array until "i" is greater than length of buttons array
for (let i = 0; i < buttons.length; i++) {
    //Adding one to increment as naming is not a 0 index
    const sectionInc = i + 1;
    //Gettting #id of button to add listener too 
    const button = document.getElementById(buttons[i].id);
    //Add event listeners to each button in "buttons" array
    button.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById(navListItems[i]).scrollIntoView({ block: "start", behavior: "smooth" });
    })
}

//Button for scrolling to the top of page
const toTopBtn = document.getElementById("goTopLink");
const topContainer = document.getElementById("layoutContainer");
toTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    topContainer.scrollIntoView({ block: "start", behavior: "smooth" })
})

//Scroll sensing function
function isInViewport(section) {
    //Getting and storing DOMRect info
    const domRect = section.getBoundingClientRect();
    //Return true when top of section's box is within 50% of the window height AND has gone 50% of the sections height above the window.
    return domRect.top > domRect.height * -0.5 && domRect.top < window.innerHeight * 0.5;
}

//Declare section and button IDs
const section_1 = document.getElementById("section_1");
const section_2 = document.getElementById("section_2");
const section_3 = document.getElementById("section_3");
const section_4 = document.getElementById("section_4");
const button_1 = document.getElementById("section_1_Btn");
const button_2 = document.getElementById("section_2_Btn");
const button_3 = document.getElementById("section_3_Btn");
const button_4 = document.getElementById("section_4_Btn");

//Function to add the navBtnIsActive if corresponding section is in viewport 
function scrollListener(section, button) {
    //Listen to scroll
    document.addEventListener("scroll", () => {
        //Add class navBtnIsActive if isInViewport returns true
        if (isInViewport(section)) {
            button.classList.add("navBtnIsActive");
            //Remove class if false
        } else {
            button.classList.remove("navBtnIsActive");
        }
    })
}
//Calling function for each section to monitor where it's at in window and to change button styles when it is.
scrollListener(section_1, button_1);
scrollListener(section_2, button_2);
scrollListener(section_3, button_3);
scrollListener(section_4, button_4);