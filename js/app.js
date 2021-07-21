//function to create and append element on hover
function giveHoverConfirm() {
    let confirmLogo = document.createElement('h1');
    confirmLogo.setAttribute('id', 'confirmLogo');
    confirmLogo.innerText = "Yes, that is the logo!";
    confirmLogo.style.color = "brown";
    confirmLogo.style.fontFamily = "Montserrat";
    document.getElementById('header').append(confirmLogo);
}

//removes the element
function removeElement() {
    let getElement = document.getElementById('confirmLogo');
    getElement.remove();
}

let logoImg = document.getElementById('logo');
//event listener for mouseover hover
logoImg.addEventListener('mouseover', giveHoverConfirm);
//event listener to remove element once hover ends
logoImg.addEventListener('mouseout', removeElement);

//function to create and append element on button click
function makeTextAppear() {
    let newText = document.createElement('p');
    newText.classList.add('elementPlacement');
    newText.innerText = "You've clicked to learn more, unfortunately... I dont know much more. GOTCHA!"
    newText.style.color = "brown";
    newText.style.fontSize = "2em";
    document.getElementById('mainBody').append(newText);
}

let clickableButton = document.getElementById('mainBtn');
//event listener for button click
clickableButton.addEventListener('click', makeTextAppear);

//function to change body background color
function changeBodyColor(e) {
    console.log(e);
    if(e.key == ' ') {
        let bodyElement = document.getElementById('webpage');
        bodyElement.style.backgroundColor = "beige"; 
    } else {
        alert("Wrong key"); 
    }
}

//event to change color on key press
document.addEventListener('keypress', changeBodyColor);