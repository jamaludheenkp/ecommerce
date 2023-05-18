import React from 'react'
import styles from '../home.css'
import vediobg from './Products/assets/bg.mp4'




const Home = () => {
  return (
    <div className='home-body' >
        <h1>  WELCOME TO RJ SHOPEE</h1>
        <video className='bg' src={vediobg} autoPlay loop muted />
    </div>
  )
}

export default Home