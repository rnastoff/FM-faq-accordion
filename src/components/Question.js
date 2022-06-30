import classes from './Question.module.css';

import iconArrow from '../images/icon-arrow-down.svg';

const Question = (props) => {
  const visibility = props.num === props.displayedAnswer;
  const questionTextActive = visibility ? classes.questionTextActive : "";
  const arrowActive = visibility ? classes.arrowActive : "";
  const answerActive = visibility ? classes.answerActive : "";

  const clickHandler = () => {
    props.handleDisplayedAnswer(props.num)
  }

  return (
    <button className={classes.question} onClick={clickHandler}>
      <div className={classes.questionGroup}>
        <h2 className={`${classes.questionText} ${questionTextActive}`}>
          {props.question}
        </h2>
        <img src={iconArrow} alt="open/close arrow" className={`${classes.arrow} ${arrowActive}`} />
      </div>

      <div className={`${classes.answer} ${answerActive}`}>
        <p>{props.answer}</p>
      </div>

      <hr />
    </button>
  )
}

export default Question;