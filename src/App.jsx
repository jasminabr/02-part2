import { useState } from "react";
import Course from "./components/Course";
import Note from "./components/Note";

const App = (props) => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      { name: "Part 1", exercises: 10 },
      { name: "Part 2", exercises: 7 },
      { name: "Part 3", exercises: 12 },
    ],
  };

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: String(notes.length + 1),
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <Course course={course} />

      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
          placeholder="Write a new note..."
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default App;
