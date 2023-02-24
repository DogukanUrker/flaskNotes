import socket
import secrets
import sqlite3
from datetime import datetime
from flask import Flask, render_template, redirect


app = Flask(__name__)
app.secret_key = secrets.token_urlsafe(32)


def currentDate():
    return datetime.now().strftime("%d.%m.%y")


def currentTime():
    return datetime.now().strftime("%H:%M")


@app.route("/")
def index():
    connection = sqlite3.connect("notes.db")
    cursor = connection.cursor()
    cursor.execute("select * from notes")
    notes = cursor.fetchall()
    return render_template("index.html", notes=notes)


@app.route("/add/<title>/<content>")
def add(title, content):
    connection = sqlite3.connect("notes.db")
    cursor = connection.cursor()
    cursor.execute(
        f'insert into notes(title,content,date,time) values("{title}","{content}","{currentDate()}","{currentTime()}")'
    )
    connection.commit()
    return redirect("/")


@app.route("/delete/<id>")
def delete(id):
    connection = sqlite3.connect("notes.db")
    cursor = connection.cursor()
    cursor.execute(f"delete from notes where id = {id}")
    cursor.execute(f"update sqlite_sequence set seq = seq-1")
    connection.commit()
    return redirect("/")


@app.route("/edit/<id>/<title>/<content>")
def edit(id, title, content):
    print(content)
    connection = sqlite3.connect("notes.db")
    cursor = connection.cursor()
    cursor.execute(f'update notes set title = "{title}" where id = {id}')
    cursor.execute(f'update notes set content = "{content}" where id = {id}')
    connection.commit()
    return redirect("/")


@app.errorhandler(404)
def page_not_found(e):
    return redirect("/"), 404


if __name__ == "__main__":
    app.run(
        debug=True,
        host=socket.gethostbyname(socket.gethostname()),
    )
