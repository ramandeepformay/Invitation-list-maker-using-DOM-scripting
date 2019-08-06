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
    li.textContent = text;
    //CREATING LABEL
    const label = document.createElement("label");
    label.textContent = "Confirmed";
    //creating checkbox
    const checkbox =document.createElement("input");
    checkbox.type="checkbox";
   //creating remove button
    const remove = document.createElement("button");
    remove.textContent = "Remove";

     //appending children
    label.appendChild(checkbox);
    li.appendChild(label)
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
  //targeting element with tag name button
     if(target.tagName === "BUTTON"){
        const li = target.parentNode;
        ul.removeChild(li);
     }
})