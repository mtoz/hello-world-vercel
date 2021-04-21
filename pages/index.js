import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
      <h1>Mon texte</h1>
      <p>Paragraphe</p>
      <p>Paragraphe numéro 2</p>

    </div>
  )
}
