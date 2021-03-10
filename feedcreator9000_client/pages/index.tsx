import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';
import { GetServerSideProps } from 'next';

export default function Home({ bloops }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(bloops)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
        <p>bloopety Blue</p>
      </footer>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  return { 
    props: {
      bloops: [1, 2],
      koops: []
    },
    revalidate: 1,
  }
}