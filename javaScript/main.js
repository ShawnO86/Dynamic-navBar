//Declare the navagation items in an array
let navListItems = ["section_1", "section_2", "section_3", "section_4"];

function createNav(navBarItems) {
    const navBar = document.createElement('nav');
    const newList = document.createElement('ul');
//Loop through referenced array of navagation items
    for (let i = 0; i <= navBarItems.length - 1; i++) {
        const newListItem = document.createElement('li');
        
        newListItem.setAttribute("class", "navBtn");
        newListItem.setAttribute("id",  navBarItems[i] + "_Btn");
        newListItem.innerHTML = navBarItems[i];

        newList.appendChild(newListItem);
    }

    document.body.appendChild(navBar)
    navBar.appendChild(newList)
}

createNav(navListItems);

const section_1_btn = document.getElementById("section_1_Btn");
const section_2_btn = document.getElementById("section_2_Btn");
const section_3_btn = document.getElementById("section_3_Btn");
const section_4_btn = document.getElementById("section_4_Btn");
const section_1_Container = document.getElementById("section_1");
const section_2_Container = document.getElementById("section_2");
const section_3_Container = document.getElementById("section_3");
const section_4_Container = document.getElementById("section_4");

section_1_btn.addEventListener("click", () => {
    section_1_Container.scrollIntoView({block: 'start', behavior: 'smooth'});
});

section_2_btn.addEventListener("click", () => {
    section_2_Container.scrollIntoView({block: 'start', behavior: 'smooth'});
});

section_3_btn.addEventListener("click", () => {
    section_3_Container.scrollIntoView({block: 'start', behavior: 'smooth'});
});

section_4_btn.addEventListener("click", () => {
    section_4_Container.scrollIntoView({block: 'start', behavior: 'smooth'});
});