import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Thanks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Another Page" />
		<p>Thankyou for submitting your form</p>
      </main>

      <Footer />
    </div>
  )
}
