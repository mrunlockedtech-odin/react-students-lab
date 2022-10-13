import Scores from "../components/Scores";

const Student = (props) => {
  return (
    <div>
      <h1>{props.student.name}</h1>
      <h2>Bio: </h2>
      <p>{props.student.bio}</p>
      <h2>Scores:</h2>
      {props.student.scores.map(score => <Scores score={score}/>)}
      
    </div>
  );
}

export default Student;