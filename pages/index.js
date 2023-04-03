import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'



export default function Home() {
  return (
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
	<script type="text/javascript">
	algoliasearchNetlify({
	appId: '8VDJOUIEOJ',
	apiKey: '1b1a551db869f7a5e9eb341f9706631d',
	siteId: '4a4b6f4b-2416-48e6-a343-683e915e9cdf',
	branch: 'main',
	selector: 'div#search',
	});
	</script>

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
