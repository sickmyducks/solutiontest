import styles from '../../styles/Solutions.module.css'
import Head from 'next/head'
import Link from 'next/link'
  
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: { solutions: data}
    }
}

const Solutions = ({ solutions }) => {
    return (
    <>
        <head>
            <title>ProtoX | Solutions</title>
            <meta name="keywords" content="agriculture"/>
        </head>
            <div>
                <h1>Solutions</h1>
                {solutions.map(solution => (
                    <Link href={'/solutions/' + solution.id } key={solution.id}>
                        <a className={styles.single}>
                            <h3>{ solution.name }</h3>
                        </a>
                    </Link>
               ))}
            </div>    
    </>
    );
}
 
export default Solutions