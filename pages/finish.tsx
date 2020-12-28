import { NextPage } from "next";
import styles from '../components/layout.module.css'
import { useEffect, useState } from "react";

const Result: NextPage = () => {
  
  useEffect(() => {
    alert("Heb je de test al gedaan? Doe deze eerst voordat je verder gaat!")
  }, [])

  return (
      <body className={styles.homepage_body}>

        <main>

        <div className={styles.container}>
          <b>Een bericht van Sint & Daan</b>
          <br/><br/>
          <div className={styles.quotedTextBlock}>
          <p>
            2020 was voor jou een grote hel, misère stond in de rij om bij jou langs te mogen gaan.
            Zo begon dit jaar met de ontsnapping van Hendrik, die enige tijd de druk opvoerde bij je ouders thuis.
          </p>
          <p>
          En zelfs voordat de rust wederkeerde in Veere begon alvast een nieuwe ronde ellende. Je vriendje bleek ernstig ziek te zijn. Nu was dit natuurlijk zwaar voor iedereen in deze kamer, maar dus ook heel erg voor jou. En toch, toch heb je je er doorheen geslagen. En niet alleen dat, je bent ook nog eens een studie gaan knallen!
          </p>
          <p>
          Ik (Daan) ben afgelopen jaar overspoeld met liefde door iedereen hier. Iedereen stond voor me klaar om me door deze zware tijd te helpen. En jij misschien wel het allermeest, zij het noodgedwongen misschien. Al waren er genoeg mensen bereid om je plaats in te nemen…
          </p>
          <p>
          Je hebt me 18 keer opgehaald wanneer ik volgepompt was met chemo. Waarvan 6 wel heel moeilijk moeten zijn geweest. Maar daar stond je, klaar om me op te vangen en me er doorheen te slepen. En dat heb je gedaan. Dat hebben jullie allemaal gedaan.
          </p>
          <p>
          Ik zou jullie allemaal nog wel honderdduizend keer willen bedanken voor jullie steun. Maar ik zal het een-voor-een doen. En vandaag, in naam van de Sint, ben jij aan de beurt Janine.
          </p>
          <p>
          Aangezien mijn koptelefoon waarschijnlijk vervuild is geraakt door de chemo lijkt het me beter als je deze niet meer op doet. In plaats daarvan heeft Sint nog een extra paar beats voor je geregeld. Kijk maar in de wasmachine.
          </p>
          <p>
          Heel veel plezier er mee,<br/>
          <br/>
          Sint & Daan
          </p>
          </div>
        </div>

        </main>

      </body>
  )
}

export default Result;