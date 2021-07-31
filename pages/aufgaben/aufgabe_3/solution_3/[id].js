import styles from '../../../../styles/Home.module.css'
import Link from 'next/link'

export async function getStaticPaths () {
    const res  = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params: {id: user.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps (context) {
    const id = context.params.id;
    const res  = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {user: data}
    }
}

export default function Details ({user}) {
    return (
        <>
        <main className={styles.main}>
        <h1 className={styles.title}>Lösung zur Aufgabe 3</h1>
        <br />
        <br />

        <div>
            <h1>{user.name}</h1>
            <p> {user.email} </p>
            <p> {user.website} </p>
            <p> {user.address.city} </p>
        </div>
        <br />
        <br />

        <div className={styles.btn}>
                <button className={styles.btn_aufgaben}>
                    <h3>
                        <Link href="/aufgaben/aufgabe_3/aufgabe3">Zurück zur Aufgabe 3</Link>
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