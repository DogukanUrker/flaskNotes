function addNote() {
    var title = document.querySelector("#title").value;
    var content = document.querySelector("#content").value;
    if (title === "" || title.replace(/\s/g, "") === "" && content === "" || content.replace(/\s/g, "") === "") {
    } else {
        window.location.href = `/add/${title}/${content}`;
    }
}
function editNote() {
    var title = document.querySelector("#noteTitle").value;
    var content = document.querySelector("#noteContent").target.select();
    var noteID = document.querySelector("#noteID").innerHTML;
    if (title === "" || title.replace(/\s/g, "") === "" && content === "" || content.replace(/\s/g, "") === "") {
    } else {
        console.log(`/edit/${noteID}/${title}/${content}`)
        window.location.href = `/edit/${noteID}/${title}/${content}`;
    }
}