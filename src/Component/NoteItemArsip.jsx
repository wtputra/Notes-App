import React from "react";
import NoteContent from "./NoteContent";
import NoteAction from "./NoteAction";

function NoteItemArsip({ title, createdAt, body, id, onDelete, onArsip }) {
  return (
    <div className="note-item">
      <NoteContent title={title} createdAt={createdAt} body={body} />
      <NoteAction id={id} onDelete={onDelete} onArsip={onArsip} />
    </div>
  );
}

export default NoteItemArsip;
