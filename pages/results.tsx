import { NextPage } from "next";
import Link from 'next/link'
import styles from '../components/layout.module.css'
import questions, { questionsByTargetNum, TARGET_MANTELZORGER, TARGET_PSYCHOLOOG } from "../services/questions/questions";

import ProgressBar from 'react-bootstrap/ProgressBar'
import { useEffect, useState } from "react";

const scoreClassifier = (scorePsy: number, scoreMant) => {
  const [type, score] = scorePsy >= scoreMant ? [TARGET_PSYCHOLOOG, scorePsy] : [TARGET_MANTELZORGER, scoreMant];
  const maxScore = questionsByTargetNum(type);
  if (score / maxScore < 0.33) {
    return ['degelijke', type];
  }
  if (score / maxScore < 0.66) {
    return ['geschikte', type];
  }
  return ['fantastische', type];
}

const Result: NextPage = () => {
  const [profession, setProfession] = useState('');
  const [rating, setRating] = useState('');
  const [correctPsy, setCorrectPsy] = useState(0);
  const [correctMant, setCorrectMant] = useState(0);

  const questionNumMantelzorger = questionsByTargetNum(TARGET_MANTELZORGER)
  const questionNumPsycholoog = questionsByTargetNum(TARGET_PSYCHOLOOG)

  const labelPsycholoog = <label>Psycholoog</label>;  
  const labelMantelzorger = <label>Mantelzorger</label>;

  useEffect(() => {
    const correctAnswerMantelzorger = Number.parseInt(localStorage.getItem('score_mantelzorger'));
    const correctAnswerPsycholoog = Number.parseInt(localStorage.getItem('score_psycholoog'));
    setCorrectPsy(correctAnswerPsycholoog);
    setCorrectMant(correctAnswerMantelzorger);

    const [rating, profession] = scoreClassifier(correctAnswerPsycholoog, correctAnswerMantelzorger);
    setProfession(profession);
    setRating(rating);

    localStorage.setItem('profession', profession);
  }, [])
  
  return (
      <body className={styles.homepage_body}>

        <main>

        <div className={styles.container}>
          <h1>Gefeliciteerd!</h1> 
          <h2>Jij bent overduidelijk een <span style={{color: "green"}}>{rating} {profession}</span></h2>
        </div>
        <div className={styles.container}>
          <p>
            <b>{labelPsycholoog}</b>
            <ProgressBar role="progressbar" 
              min={0} 
              max={questionNumPsycholoog} 
              variant="success" 
              animated={true}
              now={correctPsy}
            />
            <label>Totaal aantal vragen: {questionNumPsycholoog}</label><br/>
            <label>Totaal aantal goed: {correctPsy}</label><br/>
            <br/>
            <b>{labelMantelzorger}</b>
            <ProgressBar role="progressbar" 
              min={0} 
              max={questionNumMantelzorger} 
              variant="info" 
              animated={true}
              now={correctMant}
            />
            <label>Totaal aantal vragen: {questionNumMantelzorger}</label><br/>
            <label>Totaal aantal goed: {correctMant}</label><br/>
          </p>
        </div>

        <div>
          Voltooi nu je registratie door <Link href="/registration">hier</Link> te klikken.
        </div>



        </main>

      </body>
  )
}

export default Result;