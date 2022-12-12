import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer/Footer'
import Advertise from '../components/Home/Advertise/Advertise'
import Banner from '../components/Home/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <Advertise></Advertise>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  )
}
