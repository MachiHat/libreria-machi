import React, { useState } from "react";

const EditNote = ({ sendNote }) => {
  const [newNote, setNewNote] = useState();
  return (
    <form>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <textarea
            className="w-full h-32"
            placeholder="Edita tu nota..."
            value={newNote}
            onChange={(text) => setNewNote(text.target.value)}
          />
          <div className="modal-action">
            <label htmlFor="edit-modal" className="btn btn-circle">
              ✕
            </label>
            <label
              htmlFor="edit-modal"
              className="btn"
              onClick={() => sendNote(newNote)}
            >
              Editar
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditNote;
