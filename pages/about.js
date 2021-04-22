import Link from 'next/link'
import style from '../styles/about.module.css'

export default function About() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/">
        <a>Accueil</a>
      </Link>
      <h1 className={style.center}>Page contact</h1>
      <p className={style.p}>Paragraphe contact</p>
      <p>Paragraphe numéro 2 page contact</p>
      <p>Test extensions</p>

    </div>
  )
}
