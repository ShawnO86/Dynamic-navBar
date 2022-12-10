//Declare the navagation items in an array

let navListItems = document.getElementsByTagName("section");
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
    newItemBtn.setAttribute("id", navListItems[i].id + "_Btn");
    //Set text to corresponding section
    newItemBtn.innerText = navListItems[i].id;
    //Append li to unordered list
    newList.appendChild(newListItem);
}
//Append nav to body and previously created list to nav
navBar.appendChild(newList);
document.body.appendChild(navBar);

//Get array of buttons in nav
const buttons = document.querySelectorAll('.navBtn');
//Loop through buttons array until "i" is greater than length of buttons array
for (let i = 0; i < buttons.length; i++) {
    //Gettting #id of button to add listener too 
    const button = document.getElementById(buttons[i].id);
    //Add event listeners to each button in "buttons" array
    button.addEventListener("click", (e) => {
        e.preventDefault();
        navListItems[i].scrollIntoView({ block: "start", behavior: "smooth" });
    })
    console.log(navListItems[i]);
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
    //Getting and storing DOMRect info for specified section
    const domRect = section.getBoundingClientRect();
    //Return true when top of section's box is within 50% of the window height AND has gone 50% of the sections height above the window.
    return domRect.top > domRect.height * -0.5 && domRect.top < window.innerHeight * 0.5;
}

//Adding button styles if corresponding section is in view
for (let i = 0; i < buttons.length; i++) {
    //Gettting #id of button to add listener too 
    const button = document.getElementById(buttons[i].id);
    //Getting section to check isInViewport
    const section = navListItems[i];
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