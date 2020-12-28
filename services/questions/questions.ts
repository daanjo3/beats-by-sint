import { QuestionContent } from './components/QuestionComponent';

export const TARGET_MANTELZORGER = "mantelzorger"
export const TARGET_PSYCHOLOOG = "psycholoog"

export const questionsByTarget = (target: string) => Object.values(questions).filter(q => q.target === target)
export const questionsByTargetNum = (target: string) => questionsByTarget(target).length;

const questions = {
  1: {
    number: 1,
    target: TARGET_MANTELZORGER,
    paragraphs: [
      "Wanneer je succesvol wilt zijn in je carriere is het belangrijk om echte toppers te kennen.",
      "Een van de bekendste mantelzorgers is zonder meer nurse Joy uit pokemon."
    ],
    question: "Wie heeft er een crush op deze zuster?",
    images: [
      {
        url: "/images/quiz/q1_nursejoy.jpeg",
        alt: "Nurse Joy"
      }
    ],
    answer: ["brock"]
  },

  2: {
    number: 2,
    target: TARGET_PSYCHOLOOG,
    paragraphs: [
      "Elke vakvrouw heeft haar gereedschap nodig. Als psycholoog heb je misschien niet zo veel aan een hamer, maar wel wat aan twee elektroden en 22.000 volt.",
    ],
    question: "Toch heeft een psycholoog ook kindvriendelijker gereedschap, welke wordt hier bedoeld?",
    images: [
      {
        url: "/images/quiz/q2_likken.gif",
        alt: "Likert"
      },
      {
        url: "/images/quiz/q2_schaal.jpg",
        alt: "Schaal"
      }
    ],
    answer: ["likert schaal", "likkert schaal"]
  },

  3: {
    number: 3,
    target: TARGET_MANTELZORGER,
    paragraphs: [
      "Als mantelzorger ben je zeer betrokken bij het leven van je patient. Je leert veel over zijn of haar sociale leven, karaktereigenschappen, gewoontes en hobbies. Door goed op te letten kan je je goed inspelen op de behoeftes van de patient.",
      "Afgelopen jaar heb je de rol als “zuster Jan” mogen vervullen voor een hele dankbare jongen. Een van de hobbies van deze jongeman is het spelen van Minecraft."
    ],
    question: "Wat gebruik je om een oven te maken in Minecraft?",
    images: [
      {
        url: "/images/quiz/q3_meinkraft.gif",
        alt: "Meinkraften"
      }
    ],
    hint: "We zoeken de engelse naam.",
    answer: ["cobblestone"]
  },

  4: {
    number: 4,
    target: TARGET_PSYCHOLOOG,
    paragraphs: [
      "Wanneer je succesvol wilt zijn in je carriere is het belangrijk om echte toppers te kennen.",
      "Een van de bekendste mantelzorgers is zonder meer nurse Joy uit pokemon."
    ],
    intro: "Toevallig weet Sint dat jij af en toe een intense drang kan ervaren om het bed netjes op te maken. En wee degene die er dan op gaat liggen! Hoe zou dergelijk gedrag geclassificeerd kunnen worden?",
    question: "Hoe zou dergelijk gedrag geclassificeerd kunnen worden?",
    hint: "We zoeken het c-woord.",
    images: [
      {
        url: "/images/quiz/q4_madebed.jpeg",
        alt: "Made bed"
      }
    ],
    answer: ["compulsief"]
  }

} as { [key:number]: QuestionContent }

export default questions;