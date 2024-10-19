const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <p key={part.name}>
          {part.name} has {part.exercises} exercises.
        </p>
      ))}
    </div>
  );
};

export default Content;
