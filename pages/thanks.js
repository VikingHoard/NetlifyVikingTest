import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Thanks() {
  return (
    <div className="container">
      <Head>
        <title>Thanks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Thankyou" />
		<p>Thankyou for submitting your form</p>
      </main>

      <Footer />
    </div>
  )
}
