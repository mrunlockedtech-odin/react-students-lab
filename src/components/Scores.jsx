const Scores = (props) => {
  return ( 
    <div>
    <p>The Score on {props.score.date} was {props.score.score}</p>
    </div>
   );
}
 
export default Scores;