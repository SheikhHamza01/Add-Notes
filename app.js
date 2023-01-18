console.log("Welcome to note app");
shownotes();

//if user add note. add it to localstorage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    console.log(notesObj);
    shownotes();
}
)

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);

    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` 
         <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
         <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div>
        `;

    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML=`Nothing to show "ADD NOTE" to view something`;
    }
}

//function to delete notes

function deletenote(index)
{
    console.log("I'm deleting",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();

}


