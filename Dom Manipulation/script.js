const body = document.body;
// body.append("Hello World", " ", "Bye"); //you can append strings and also all tags (Recommended)
// // body.appendChild("Hello World"); //you can only append divs, etc tags

//TODO: //To create a new element on the dom
// const div = document.createElement("div");
// // div.innerText = "Hello There"; //1 way
// // div.textContent = "Hello There"; //2nd way

//TODO: //to change html
// div.innerHTML="<strong>Hello There</strong>"

// body.append(div);
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

//TODO:To remove html

// spanBye.remove();
// div.removeChild(spanHi); //Another Way to remove 

//TODO: To Get Attributes

// console.log(spanHi.getAttribute("title"));
// console.log(spanHi.title) //Another Way (Recommended);

//TODO: To Set Attribute
// spanHi.setAttribute("id", "updatedHi");

//TODO: To Remove Attribute
// spanHi.removeAttribute("title");


//TODO: Add classes, Remove
// spanHi.classList.add("new-class");
// spanHi.classList.remove("new-class");

// TODO: Class Toggle
// spanHi.classList.toggle("hi2", true);

//TODO: To modify Style
spanHi.style.color = "red"; 
spanBye.style.backgroundColor = "red"; 