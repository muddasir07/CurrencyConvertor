import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import CurrencyConverter from '@/pages/page'

export default function Home() {
  return (
    <>
      <Head>
        <title>Currency Converter</title>
        <meta name="description" content="Currency Converter App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <CurrencyConverter />
      </main>
    </>
  )
}
