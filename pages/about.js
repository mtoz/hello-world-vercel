import Link from 'next/link'
import style from '../styles/about.module.css'

export default function About() {
  return (
   
      <div className={style.body}>

        <div className={style.btnContainer}>

          <div className={style.btn}>
            <a href="#">Read More</a>
          </div>   

          <div className={style.btn}>
            <a href="#">Read More</a>
          </div>

        </div>
       

        <div className={style.greyBanner}>
        </div>  

        {/* Début des cards */}

        <div className={style.containCard}>

          {/* 1ere */}
          <div className={style.card}>

            <div className={style.imgBx}>
            </div>

            <div className={style.content}>
              <h2>Card one</h2>
              <p> lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
            </div>

          </div>

          {/* 2ème */}
          <div className={style.card}>

            <div className={style.imgBx}>
            </div>

            <div className={style.content}>
              <h2>Card one</h2>
              <p> lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
            </div>

          </div>

          {/* 3ème */}
          <div className={style.card}>

            <div className={style.imgBx}>
            </div>

            <div className={style.content}>
              <h2>Card one</h2>
              <p> lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
            </div>

          </div>

        </div>

        {/* FIN */}

         
      </div>

     
  )
}
