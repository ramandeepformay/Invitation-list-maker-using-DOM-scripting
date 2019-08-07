document.addEventListener("DOMContentLoaded",()=>{
    //capturing all the elements
    const form = document.querySelector(".registrar");
    const input = document.querySelector("input");
    const main = document.querySelector(".wrapper");
    const ul =document.getElementById("invite");
    //create elements for div label and append those to make amn element which contains checkbox
    const div = document.createElement("div");
    const label = document.createElement("label");
    const inputFilter = document.createElement("input");
    inputFilter.type = "checkbox";
    label.textContent ="Hide those who haven't responed";
    label.appendChild(inputFilter);
    div.appendChild(label);
    main.insertBefore(div, ul);


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
        //element creatin function
        function createElement(element, prop, val){
            const el = document.createElement(element);
            el[prop]=val;
            return el
        }
        //appending child  function
        function append(element, prop, val){
            const el = createElement(element, prop, val);
            li.appendChild(el);
            return el
        }
        const li = document.createElement("li");
        //creating span element
        append("span", "textContent", text);
        //CREATING LABEL
        const label=append("label", "textContent", "Confirmed");
        //creating checkbox
        const checkbox=createElement("input", "type", "checkbox");
        label.append(checkbox);
        //creating edit button
        append("button", "textContent", "Edit");
        //creating remove button
        append("button", "textContent", "Remove");
        //appending children
        
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
        const obj ={
            Remove:() => {
                ul.removeChild(li);
            },
            Edit:() => {
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
            },
            save:() => {
                console.log(target);
                const input = li.firstElementChild;
                console.log(input);
                const span = document.createElement("span");
                span.textContent = input.value;
                li.insertBefore(span, input);
                li.removeChild(input);
                target.textContent = "Edit";
            }
        };
          
    //targeting element with tag name button 
    if(target.tagName === "BUTTON"){
        // refactoring
        const buttonAction = target.textContent;
        console.log(buttonAction);
        //select in obj to run  the funcs
        obj[buttonAction]();
        // if(target.textContent === "Remove"){
        //     obj.remove();
        // }
        // //targeting to edit the element
        // else if(target.textContent === "Edit"){
        //    obj.Edit();
        // }
        // //it's same like before but in reverse order
        // else if(target.textContent === "save"){
        //    obj.save();
        // } 
    }
    })

    //Event listener on hide elemnts to check who are invited or who are not
    inputFilter.addEventListener("change",(e)=>{
        //storing bollean value of checked or not in check
        const check =e.target.checked;
        //storing all the ul children in list
        const list = ul.children;
        if(check){
            //looping through all the li elements
            for(let i=0; i<list.length; i++){
                //storing all the values in li
            let li = list[i]
            //if li contains class outline then display it otherwise block it
                if(li.className === "outline"){
                    li.style.display = "block";
                }
                else{
                    li.style.display = "none";
                }
            }
        }
        else{
            for(let i=0; i<list.length; i++){
            let li =list[i];
                li.style.display = "block";
            }   

        }
    })
});
