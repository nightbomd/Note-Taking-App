const h1 = document.getElementById("h1");
const noteButton = document.getElementById("generateNote");
const noteArea = document.querySelector(".note-area");
const randomMessage = ["Hello", "Good Morning", "Welcome"];
const buttonWrapper = document.getElementById("buttons");
const deleteBtn = document.createElement("button");
const submitNote = document.createElement("button");

// Greets the user
function getUserName() {
    const userName = window.prompt("What's your Name?");
    const randomIndex = Math.floor(Math.random() * randomMessage.length);
    if (userName) {
        h1.innerHTML = `${randomMessage[randomIndex]}, ${userName}`;
    } else {
        h1.innerHTML = `${randomMessage[randomIndex]}, Stranger!`;
    }
}

getUserName();

// Creates a new note
function generateNote() {
    if (noteArea.querySelector("textarea")) return;

    const noteSpace = document.createElement("textarea");
    noteSpace.classList.add("form-control", "note");
    noteSpace.placeholder = "Type something here...";
    noteArea.appendChild(noteSpace);
    submitNote.classList.add("btn", "btn-dark");
    buttons.appendChild(submitNote);
    submitNote.innerHTML = "Submit";
}

// Creates a delete button if note exists
function createDeleteBtn() {
    if (noteArea.querySelector("textarea") && !buttonWrapper.contains(deleteBtn)) {
        deleteBtn.classList.add("btn", "btn-danger", "deleteBtn");
        deleteBtn.innerHTML = "Delete Note";
        buttonWrapper.appendChild(deleteBtn);
    }
}


function deleteNote() {
    const textarea = noteArea.querySelector("textarea");
    if (textarea) {
        noteArea.removeChild(textarea);
        buttons.removeChild(submitNote);
    }
    if (buttonWrapper.contains(deleteBtn)) {
        buttonWrapper.removeChild(deleteBtn);
    }
}

function submitButton () {
    
}


noteButton.addEventListener("click", () => {
    generateNote();
    createDeleteBtn();
});

deleteBtn.addEventListener("click", deleteNote);