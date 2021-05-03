import Link from 'next/link';
import style from '../styles/about.module.css';
import Image from 'next/image';

export default function About() {
  return (

    // Début du code html
    <div>

      {/* Début container cards */}
      <div className={style.container}>

        <div className={style.containCard}>

          {/* 1ere */}
          <div className={style.card}>

            <div className={style.imgBx}>
              <Image
                src='/afficheparkour.jpg'
                alt=''
                width={550}
                height={550}
                loading='lazy'
              />
            </div>

            <div className={style.content}>
              <h2>Card one</h2>
              <p> lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
            </div>

            <div className={style.imgParkour}>

            </div>

          </div>

          {/* 2ème */}
          <div className={style.card}>

            <div className={style.imgBx}>
              <Image
                src='/afficheparkour.jpg'
                alt=''
                width={550}
                height={550}
                loading='lazy'
              />
            </div>

            <div className={style.content}>
            <h2>Court métrage</h2>
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

          {/* 4ème */}
          <div className={style.card}>

            <div className={style.imgBx}>
              <Image
                src='/afficheparkour.jpg'
                alt=''
                width={550}
                height={550}
                loading='lazy'
              />
            </div>

            <div className={style.content}>
              <h2>Card one</h2>
              <p> lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
            </div>

          </div>

          {/* 5ème */}
          <div className={style.card}>

            <div className={style.imgBx}>
            </div>

            <div className={style.content}>
              <h2>Card one</h2>
              <p> lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
            </div>

          </div>


          {/* 2eme ligne */}

          {/* 6eme */}
          <div className={style.card}>

            <div className={style.imgBx}>
              <Image
                src='/afficheparkour.jpg'
                alt=''
                width={550}
                height={550}
                loading='lazy'
              />
            </div>

            <div className={style.content}>
              <h2>Card one</h2>
              <p> lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
            </div>

            <div className={style.imgParkour}>

            </div>

          </div>

          {/* 7ème */}
          <div className={style.card}>

            <div className={style.imgBx}>
              <Image
                src='/afficheparkour.jpg'
                alt=''
                width={550}
                height={550}
                loading='lazy'
              />
            </div>

            <div className={style.content}>
              <h2>Card one</h2>
              <p> lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
            </div>

          </div>

          {/* 8ème */}
          <div className={style.card}>

            <div className={style.imgBx}>
            </div>

            <div className={style.content}>
              <h2>Card one</h2>
              <p> lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
            </div>

          </div>

          {/* 9ème */}
          <div className={style.card}>

            <div className={style.imgBx}>
              <Image
                src='/afficheparkour.jpg'
                alt=''
                width={550}
                height={550}
                loading='lazy'
              />
            </div>

            <div className={style.content}>
              <h2>Card one</h2>
              <p> lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
            </div>

          </div>

          {/* 10ème */}
          <div className={style.card}>

            <div className={style.imgBx}>
            </div>

            <div className={style.content}>
              <h2>Card one</h2>
              <p> lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
            </div>

          </div>

        </div>

      </div>
      {/* Fin container des cards */}


      {/* Début container bouton */}
      <div className={style.container}>
        <div className={style.btnContainer}>

          <div className={style.btn}>
            <a href="#">Read More</a>
          </div>

          <div className={style.btn}>
            <a href="#">Read More</a>
          </div>

          <div className={style.btn}>
            <a href="#">Read More</a>
          </div>

          <div className={style.btn}>
            <a href="#">Read More</a>
          </div>

          <div className={style.btn}>
            <a href="#">Read More</a>
          </div>

        </div>
      </div>
      {/* Fin container boutons */}

    </div>
    // Fin du code html


  )
}
