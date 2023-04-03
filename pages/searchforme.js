import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Another Page" />
		<p>This is another page search for the word antelope to find it.</p>
      </main>

      <Footer />
    </div>
  )
}
