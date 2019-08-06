//capturing all the elements
const form = document.querySelector(".registrar");
const input = document.querySelector("input");
const ul =document.getElementById("invite");

//applying event listener
form.addEventListener("submit", (e)=>{
    //stopping default behaviour of browser
    e.preventDefault();
    //capturing data from the input
    const text = input.value;
    //clearing input 
    input.value="";
    // storing and calling function
    const li =createElement(text);
    //creating li element
     ul.appendChild(li);
})

//creating function
function createElement(text){
    const li = document.createElement("li");
    //creating span element
    const span = document.createElement("span");
    span.textContent = text;
    li.appendChild(span);
    //CREATING LABEL
    const label = document.createElement("label");
    label.textContent = "Confirmed";
    //creating checkbox
    const checkbox =document.createElement("input");
    checkbox.type="checkbox";
    //creating edit button
    const edit =document.createElement("button");
    edit.textContent = "Edit";

   //creating remove button
    const remove = document.createElement("button");
    remove.textContent = "Remove";
    //appending children
    label.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(edit);
    li.appendChild(remove);
    return li;
}

// event listener for checking the checkbox
ul.addEventListener("change",(e)=>{
    // accesing the target which is checkbox
    const check =event.target;
    //getting li element
   const list =check.parentNode.parentNode;
    // as checked then checkbox returns true if not checked it returns false
    if(check.checked){
        //adding class name
        list.className="outline";
    }
    else{
        list.className="";
    } 
})
//evebt listener for remove button
ul.addEventListener("click", (e)=>{
  const target=e.target;
  const li = target.parentNode;
  //targeting element with tag name button 
  if(target.tagName === "BUTTON"){
    if(target.textContent === "Remove"){
       ul.removeChild(li);
     }
     //targeting to edit the element
    else if(target.textContent === "Edit"){
        // first create element and then access it
        const span = li.firstElementChild;
        const input =document.createElement("input");
        input.type="text";
        //putting the value of span into input
        input.value=span.textContent;
        //adding input 
        li.insertBefore(input, span);
        //removing span element
        li.removeChild(span);
        target.textContent = "save";
     }
     //it's same like before but in reverse order
    else if(target.textContent === "save"){
        console.log(target);
        const input = li.firstElementChild;
        console.log(input);
        const span = document.createElement("span");
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        target.textContent = "Edit";
    } 
    
    }

})