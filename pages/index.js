import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return ( 
    <>

    <main className={styles.main}>
      <h1 className={styles.title}>Aufgaben zum Workshop Next.js</h1>
      <br></br>
      <br></br>
      <div className={styles.btn}>
        <button className={styles.btn_aufgaben}>
          <h3>
            <Link href="/aufgaben/aufgabe_1/aufgabe1">Aufgabe 1</Link>
          </h3>
        </button>
          
        <br></br>
        <br></br>

        <button className={styles.btn_aufgaben}>
          <h3>
            <Link href="/aufgaben/aufgabe_2/aufgabe2">Aufgabe 2</Link>
          </h3>
        </button>
        
        <br></br>
        <br></br>

        <button className={styles.btn_aufgaben}>
        <h3>
          <Link href="/aufgaben/aufgabe_3/aufgabe3">Aufgabe 3</Link>
        </h3>
        </button>
      </div>
    </main>
    </>
  )
}
