import styles from '../../../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../../../components/layout'


export default function Solution1() {
    return (
        <>
        <main className={styles.main}>
            <h1 className={styles.title}>Lösung zur Aufgabe 1</h1>
            <br></br>
            <br></br>
            
            {/* ----------------------Solutions to exercice 1------------------------- */}

            {/* 1) Metadata:  next/head */}
            <Head>
                <title>Aufgabe 1</title>
            </Head>

            {/* 2) Image optimization:  next/image */}
            <Image
                src="/images/profile.jpg" // 
                height={300} // 
                width={300} // 
                alt="Profile"
            />

            {/* 3) CSS Styling */}
            <div>
                <h3>Hier ist die Aufgabe 1</h3>
                <style jsx>{`
                    h3 {
                    font-size: 3rem;
                    color: green;
                    }
                `}</style>
            </div>
            
            {/*  4) Layout Component  */}
            {/* Note: The file '/components/layout.js' and  '/components/layout.module.css' are also part of the solution */}
            <Layout>
                <h1>Layout Component</h1>
                <h2>
                    {/*  5) Links */}
                    <Link href="/">
                        <a>Homepage</a>
                    </Link>
                </h2>
            </Layout>


            {/* ------------------------------------------------------------- */}
            
            
            <br></br>
            <br></br>

            <div className={styles.btn}>
                <button className={styles.btn_aufgaben}>
                    <h3>
                        <Link href="/aufgaben/aufgabe_1/aufgabe1">Zurück zur Aufgabe 1</Link>
                    </h3>
                </button>

                <br></br>
                <br></br>
                <button className={styles.btn_home}>
                    <h4>
                        <Link href="/">Zurück zur Startseite</Link>
                    </h4>
                </button>
            </div>
        </main>
        </>
    )
}