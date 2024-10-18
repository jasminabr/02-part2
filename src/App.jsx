const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} has {part.exercises} exercises.
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  );
};

const Course = (props) => {
  const { course } = props;
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
    </div>
  );
};

const App = (props) => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      { name: "Part 1", exercises: 10 },
      { name: "Part 2", exercises: 7 },
      { name: "Part 3", exercises: 12 },
    ],
  };

  const notes = props.notes;

  return (
    <div>
      <Course course={course} />

      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
