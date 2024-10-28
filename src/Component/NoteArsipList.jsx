import React from "react";
import NoteItemArsip from "./NoteItemArsip";

function NoteArsipList({ notes, onDelete, onArsip }) {
  if (notes.length >= 1) {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItemArsip
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            onDelete={onDelete}
            onArsip={onArsip}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="notes-list__empty-message">
        <p>Tidak ada catatan yang diarsipkan</p>
      </div>
    );
  }
}

export default NoteArsipList;
