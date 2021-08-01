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
            <p> <strong>Email: </strong>{user.email} </p>
            <p> <strong>Website: </strong>{user.website} </p>
            <p> <strong>Address City: </strong>{user.address.city} </p>
            <p> <strong>Phone: </strong>{user.phone} </p>
            <p> <strong>Company Name: </strong>{user.company.name} </p>
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
                <style jsx>{`
                    .btn_back {
                        background-color: gray;
                        border: 1px solid gray;
                        color: #fff;
                        font-weight: 200;
                        border-radius: 10px;
                        cursor: pointer;
                        transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
                    }
                    .btn_back:hover {
                        background-color: #fff;
                        border: 1px solid gray;
                        color: gray;
                    }
                `}</style>

                <button className="btn_back">
                    <h4>
                        <Link href="/aufgaben/aufgabe_3/solution_3/solution3">Zurück</Link>
                    </h4>
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