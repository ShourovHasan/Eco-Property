import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer/Footer'
import Advertise from '../components/Home/Advertise/Advertise'
import Banner from '../components/Home/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <Banner></Banner>
      <Advertise></Advertise>
      <Footer></Footer>
      <Toaster />
    </div>
  )
}
