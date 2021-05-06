import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <head>
      <title>ProtoX | Home</title>
      <meta name="keywords" content="agriculture"/>
    </head>
    <div>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>Commodo culpa ut enim mollit est do eiusmod velit in officia occaecat ad. Cillum non nulla ex ipsum magna in cillum sint aute magna deserunt nisi. Ut Lorem proident laborum sint minim non ipsum adipisicing elit anim in cillum labore.</p>
      <p className={styles.text}>Commodo culpa ut enim mollit est do eiusmod velit in officia occaecat ad. Cillum non nulla ex ipsum magna in cillum sint aute magna deserunt nisi. Ut Lorem proident laborum sint minim non ipsum adipisicing elit anim in cillum labore.</p>
      <Link href="/solutions">
        <a className={styles.btn}>Project</a>      
      </Link>
    </div>
    </>
  )
}
