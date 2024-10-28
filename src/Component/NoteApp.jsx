import React from "react";
import NavApp from "./NavApp";
import FormApp from "./FormApp";
import { getInitialData } from "../utils/index";
import NoteList from "./NoteList";
import NoteArsipList from "./NoteArsipList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArsipHandler = this.onArsipHandler.bind(this);
  }

  onArsipHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }
  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: new Date().toISOString(),
            body,
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => !note.archived); // Catatan aktif
    const archivedNotes = this.state.notes.filter((note) => note.archived); // Catatan diarsipkan

    return (
      <>
        <NavApp />
        <div className="note-app__body">
          <FormApp addNote={this.onAddNoteHandler} />
          <NoteList
            notes={activeNotes}
            onDelete={this.onDeleteHandler}
            onArsip={this.onArsipHandler}
          />
          <h2> Catatan yang aktif</h2>
          <NoteArsipList
            notes={archivedNotes}
            onDelete={this.onDeleteHandler}
            onArsip={this.onArsipHandler}
          />
        </div>
      </>
    );
  }
}

export default NoteApp;
