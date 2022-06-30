import { useState } from 'react';

import classes from './FaqAccordion.module.css';

import Card from './Card';
import Question from './Question';

import bgPattern from '../images/bg-pattern-desktop.svg';
import box from '../images/illustration-box-desktop.svg';
import woman from '../images/illustration-woman-online-desktop.svg';

import questions from './questions.js';


const FaqAccordion = () => {
  const [displayedAnswer, setDisplayedAnswer] = useState(null);

  const handleDisplayedAnswer = (number) => {
    number === displayedAnswer ? setDisplayedAnswer(null) : setDisplayedAnswer(number);
  }

  const generateQuestions = () => {
    return questions.map((item, index) => {
      return <Question question={item.question} answer={item.answer} key={index} num={index} displayedAnswer={displayedAnswer} handleDisplayedAnswer={handleDisplayedAnswer} />
    });
  }

  return (
    <Card>
      <div className={classes.left}>
        <div className={classes.box}>
          <img src={box} alt="box" />
        </div>

        <div className={classes.woman}>
          <img src={woman} alt="woman" />
        </div>

        <div className={classes.bgPattern} >
          <img src={bgPattern} alt="background pattern" />
        </div>
      </div>

      <div className={classes.right}>
        <h1>FAQ</h1>
        {generateQuestions()}
      </div>
    </Card>
  )
}

export default FaqAccordion;