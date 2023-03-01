import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


// Import components
import { Navbar, Footer } from '@/components'
import { Landing, About, Products } from '@/components/index/index'


export default function Home() {
  return (
    <>
      <Head>
        <title>Essential Exports</title>
        <meta name="description" content="Essential Exports" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Landing />
        <About />
        <Products />
        <Footer />
      </div>
    </>
  )
}
