//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here
let child = document.createElement("div");
document.getElementById("a-1").appendChild(child);
child.className = 'square';


child.textContent = "X";
child.addEventListener('click', function() {
    if(child.textContent == "X"){
        child.textContent = "O";
    }else{child.textContent = "X"
    }
});


//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];

//resolve // QUESTION 2 here


let dropDown = document.createElement('select');
dropDown.id = "selectItems"


let option;

for (i = 0; i < colors.length; i++){
    option = document.createElement('option')
    option.value = colors[i];
    option.innerHTML = colors[i];
    dropDown.appendChild(option);
}

document.getElementById("a-2").appendChild(dropDown);



let button = document.createElement('button');
button.type = "button";
button.textContent = "Remove'"

document.getElementById("a-2").appendChild(button)


button.addEventListener('click', function() {
    let selected = selectItems.selectedIndex;
    console.log(selected);
    dropDown.remove(selected);
});



//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculateSphere = () =>{
    let inputRadius = document.getElementById('radius').value;
    let vResult = (4/3) * Math.PI * Math.pow(inputRadius, 3);
    let vFinal = vResult.toFixed(2);
    let aResult = 4 * Math.PI * Math.pow(inputRadius, 2);
    let aFinal = aResult.toFixed(2);

    //display results
    document.getElementById('volume').value = vFinal;
    document.getElementById('area').value = aFinal;
    console.log(`User Input: ${inputRadius}, vol: ${vFinal}, area: ${aFinal}`)
  
 }




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here

let ol = document.createElement('DIV');
document.getElementById("a-4").appendChild(ol);





// function hideQuestions(){
//     let labels = Array.from(document.getElementsByClassName("question-label"));
//     for (i = 0; i < 3; i++) {
//         let btn = document.createElement('BUTTON');
//         btn.innerHTML = `Hide Question ${i+1}`
//         let currentLabel = labels[i];
//         btn.onclick = function() {
//             currentLabel.style.visibility = 'hidden';
            
            
//         }
//         ol.appendChild(btn);
//     }
// }
// hideQuestions();

let button1 = document.createElement('BUTTON');
button.type = "button"
button1.innerHTML = "Hide Question 1";
button1.addEventListener("click", function(){
    let q1 = document.getElementById('a-1');
    if(q1.style.display === 'block') {
        q1.style.display = 'none';
   } else if(q1.style.display === 'none') {
        q1.style.display = "block";
   }
})
ol.appendChild(button1)


let button2 = document.createElement('BUTTON');
button2.innerHTML = "Hide Question 2";
ol.appendChild(button2)

let button3 = document.createElement('BUTTON');
button3.innerHTML = "Hide Question 3";
ol.appendChild(button3)



