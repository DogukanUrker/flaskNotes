let textareas = document.querySelectorAll('.textarea'),
    hiddenDiv = document.createElement('div'),
    content = null;
for (let j of textareas) {
    j.classList.add('txtstuff');
}
hiddenDiv.classList.add('txta');
hiddenDiv.style.display = 'none';
hiddenDiv.style.whiteSpace = 'pre-wrap';
hiddenDiv.style.wordWrap = 'break-word';

function resizer(i) {
    i.parentNode.appendChild(hiddenDiv);
    i.style.resize = 'none';
    i.style.overflow = 'hidden';
    content = i.value;
    content = content.replace(/\n/g, '<br>');
    hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';
    hiddenDiv.style.visibility = 'hidden';
    hiddenDiv.style.display = 'block';
    i.style.height = hiddenDiv.offsetHeight + 'px';
    hiddenDiv.style.visibility = 'visible';
    hiddenDiv.style.display = 'none';
}
for (let i of textareas) {
    (function (i) {
        resizer(i)
        i.addEventListener('input', function () {
            resizer(i)
        });
    })(i);
}

function addNote() {
    var title = encodeURIComponent(document.querySelector("#title").value);
    var content = encodeURIComponent(document.querySelector("#content").value);
    if (title === "" || title.replace(/\s/g, "") === "" && content === "" || content.replace(/\s/g, "") === "") { } else {
        window.location.href = `/add/${title}/${content}`;
    }
}

function editNote(noteID) {
    var title = encodeURIComponent(document.querySelector(`[id='${noteID}']` + " #noteTitle").value);
    var content = encodeURIComponent(document.querySelector(`[id='${noteID}']` + " #noteContent").value);
    if (title === "" || title.replace(/\s/g, "") === "" && content === "" || content.replace(/\s/g, "") === "") { } else {
        window.location.href = `/edit/${noteID}/${title}/${content}`;
    }
}