import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/layout.module.css'

export default function Home() {
  return (
      <body className={styles.homepage_body}>

        <div className={styles.imageColumnLeft}>
          <img src="/images/sinterklaas_staf.png"/>
        </div>

        <main>
          <div className={styles.container}>
            <h1>Gefeliciteerd met je nieuwe Beats by Sint</h1>

            <div className={styles.quotedTextBlock}>
              <p>
                Met de nieuwe Beats By Sint kan je genieten van onverstoorbaar luisterplezier,
                ideaal met van die lekkere diepe dreunen.
              </p>
            </div>

            <div>
              <p>
                Voordat je echt kan genieten zul je eerst het product moeten registeren. Dit kan 
                je <Link href="/registration">hier</Link> doen.
              </p>
            </div>
            
          </div>
        </main>

        <div className={styles.imageColumnRight}>
          <img src="/images/sinterklaas_staf.png"/>
        </div>
    </body>
  )
}
