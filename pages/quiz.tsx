import { NextPage } from "next";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import QuestionComponent, { QuestionAnswer } from '../services/questions/components/QuestionComponent';
import Layout from '../components/layout';
import questions, { questionsByTarget, TARGET_PSYCHOLOOG, TARGET_MANTELZORGER } from "../services/questions/questions";

const checkAnswer = (target, answers: { [num: number]: string }) => {
  const questions = questionsByTarget(target);
  const correct = questions.map((question) => {
    const playerAnswer = answers[question.number];
    return question.answer.includes(playerAnswer.toLowerCase()) ? 1 : 0;
  }).reduce((acc, v) => acc + v, 0);
  return correct;
}

const checkAnswers = (answers) => {
  const mantelzorgCorrect = checkAnswer(TARGET_MANTELZORGER, answers);
  const psycholoogCorrect = checkAnswer(TARGET_PSYCHOLOOG, answers);
  return [mantelzorgCorrect, psycholoogCorrect];
}

const QuestionIndex: NextPage = () => {
  const router = useRouter();
  const [answers, setAnswers] = useState({});
  const [questionId, setQuestionId] = useState(1);
  let questionContent = questions[questionId];

  console.log(answers);

  let currentAnswer: QuestionAnswer | undefined;

  useEffect(() => {
    localStorage.removeItem('score_mantelzorger');
    localStorage.removeItem('score_psycholoog');
  }, [])

  const nextQuestion = () => {
    console.log('NEXT BUTTON CLICKED');
    // Store the answer if valid
    if (currentAnswer === undefined || currentAnswer.value === '') {
      alert('Vul je antwoord in voordat je doorgaat!')
      return;
    }
    answers[currentAnswer.number] = currentAnswer.value
    currentAnswer = undefined;
    setAnswers(answers);

    // Go to the next question if possible
    if (questionId + 1 > Object.values(questions).length) {
      const [mantelzorgCorrect, psycholoogCorrect] = checkAnswers(answers);
      localStorage.setItem('score_mantelzorger', mantelzorgCorrect.toString());
      localStorage.setItem('score_psycholoog', psycholoogCorrect.toString());
      router.push("/results")
      return;
    }
    setQuestionId(questionId + 1);
  }

  const questionCallback = (answer: QuestionAnswer) => {
    currentAnswer = answer;
  }

  useEffect(() => {
    questionContent = questions[questionId];
  }, [questionId])

  return <Layout>
      <QuestionComponent content={questionContent} callback={questionCallback}/>
      <button onClick={nextQuestion}>Next</button>
    </Layout>
}

export default QuestionIndex;