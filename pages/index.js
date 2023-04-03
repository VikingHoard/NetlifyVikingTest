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
	    <div id="search>
		SEARCH DIV
		</div>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
		<p>New paragraph of plain text added</p>
		<a href="searchforme">A page to test the search</a>
      </main>

      <Footer />
    </div>
  )
}
