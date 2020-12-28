import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from '../../../components/layout.module.css';

export interface QuestionAnswer {
  number: number,
  value: string | null
}

interface QuestionProps {
  content: QuestionContent,
  callback: (answer: QuestionAnswer) => void,
}

export interface QuestionContent {
  number: number,
  target: string,
  paragraphs: string[],
  intro?: string
  question: string,
  hint?: string,
  images: ImageLink[]
  answer: string[]
}

interface ImageLink {
  url: string,
  alt: string
}

const QuestionComponent: FC<QuestionProps> = ({ content: content, callback: continueCallback }) => {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const valuePropagator = (e: React.FormEvent<HTMLInputElement>) => continueCallback({
    number: content.number,
    value: e.currentTarget.value
  })

  const clearField = (e: React.FormEvent<HTMLInputElement>) => e.currentTarget.value = "";

  return <div>
    <h1>Vraag {content.number}</h1>

    {/* Anecdotal paragraphs + Question intro + Question + Hint */}
    <div>
      {content.paragraphs.map((p, i) => <p key={`q_${content.number}_pgraph_${i}`} >{p}</p>)}
      {<p>{content.intro ?? ''} <b>{content.question}</b></p>}
      {content.hint !== undefined ? `Hint: ${content.hint}` : ''}
    </div>

    {/*  */}
    <div>
      {content.images.map((i) => <img key={`q_${content.number}_img_${i.url}`} className={styles.defaultImageSize} src={i.url} alt={i.alt}/>)}
    </div>
    <form onSubmit={onSubmit}>
      <input type="text" onFocus={clearField} onChange={valuePropagator}/>
    </form>
  </div>
}

export default QuestionComponent;