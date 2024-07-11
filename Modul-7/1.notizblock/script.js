let titles = []
let notes = []
let deleteTitles = []
let deleteNotes = []
load();

function render() {
    let notepad = document.getElementById('notepad');
    notepad.innerHTML = '';

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const note = notes[i];

        notepade.innerHTML += /*html*/`
                <div class="notebg">
                    <div class="newNote">
                    <b class="title">${title}</b><br>
                    ${note}<br>
                    </div>
                    <a class="trash" onclick="addTrashcan(${i})" href="#" ><img class="img" src="./img/trashcan.png" alt="trash"></a>
                </div>
                    `
    }
}

function renderTrash() {
    let notepadTrash = document.getElementById('notepadTrash');
    notepadTrash.innerHTML = '';

    for (let i = 0; i < deleteTitles.length; i++) {
        const deleteTitle = deleteTitles[i];
        const deleteNote = deleteNotes[i];

        notepadTrash.innerHTML += /*html*/`
            <div class="notebg">
            <div class="newNote">
            <b class="title">${deleteTitle}</b><br>
            ${deleteNote}<br>
            </div>
            <a class="trash" onclick="deleteNote(${i})" href="#"><img class="img" src="./img/delete.png" alt="trash"></a>
            <a class="return" onclick="returnNote(${i})" href="#"><img class="img" src="./img/undelete.png" alt="trash"></a>
            </div>
            `
    }
}
function addNote() {
    let title = document.getElementById('title');
    let note = document.getElementById('note');

    if (title.value == "") {
        alert('Titel eingeben!')
    } else if (note.value == "") {
        alert('Notiz eingeben!')
    } else {
        titles.push(title.value);
        notes.push(note.value);

        title.value = '';
        note.value = '';

        render();
        save();
    }

}

function addTrashcan(i) {
    deleteTitles.push(titles[i]);
    deleteNotes.push(notes[i]);

    titles.splice(i, 1);
    notes.splice(i, 1);

    render();
    save();
}



function deleteNote(i) {
    deleteTitles.splice(i, 1);
    deleteNotes.splice(i, 1);

    renderTrash();
    save();
}

function returnNote(i) {
    titles.push(deleteTitles[i])
    notes.push(deleteNotes[i])

    deleteTitles.splice(i, 1);
    deleteNotes.splice(i, 1);

    renderTrash();
    save();
}
// löscht ausgewählten/angesprochen index







function save() {
    let titlesAsText = JSON.stringify(titles);
    localStorage.setItem('titles', titlesAsText);
    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('notes', notesAsText);

    let deleteTitlesAsText = JSON.stringify(deleteTitles);
    localStorage.setItem('deleteTitles', deleteTitlesAsText);
    let deleteNotesAsText = JSON.stringify(deleteNotes);
    localStorage.setItem('deleteNotes', deleteNotesAsText);
}
// Arrays werden local gespeichert

function load() {
    let titlesAsText = localStorage.getItem('titles');
    let notesAsText = localStorage.getItem('notes');
    let deleteTitlesAsText = localStorage.getItem('deleteTitles');
    let deleteNotesAsText = localStorage.getItem('deleteNotes');
    if (titlesAsText && notesAsText) {
        titles = JSON.parse(titlesAsText);
        notes = JSON.parse(notesAsText);
    }

    if (deleteTitlesAsText && deleteNotesAsText) {
        deleteTitles = JSON.parse(deleteTitlesAsText);
        deleteNotes = JSON.parse(deleteNotesAsText);
    }

} 