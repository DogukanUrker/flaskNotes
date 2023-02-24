function addNote() {
    var title = document.querySelector("#title").value;
    var content = document.querySelector("#content").value;
    if (title === "" || title.replace(/\s/g, "") === "" && content === "" || content.replace(/\s/g, "") === "") {
    } else {
        window.location.href = `/add/${title}/${content}`;
    }
}
function editNote(noteID) {
    var title = document.querySelector(`[id='${noteID}']` + " #noteTitle").value;
    var content = document.querySelector(`[id='${noteID}']` + " #noteContent").value;
    content.replace("U+000A", "aaaaaaaaaaaaaaaaaaaaaa")
    console.log(content)
    if (title === "" || title.replace(/\s/g, "") === "" && content === "" || content.replace(/\s/g, "") === "") {
    } else {
        // window.location.href = `/edit/${noteID}/${title}/${content}`;
    }

}
