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
    //Adding one to increment as naming is not 0 index
    const sectionInc = i + 1;
    //Declaring this button to add listener too 
    const button = document.getElementById(buttons[i].id);
    //Add event listeners to each button in "buttons" array
    button.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("section_" + sectionInc).scrollIntoView({ block: "start", behavior: "smooth" });
    });
};

//Button for scrolling to the top of page
const toTopBtn = document.getElementById("goTopLink");
const topContainer = document.getElementById("layoutContainer");
toTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    topContainer.scrollIntoView({ block: "start", behavior: "smooth" })
})