import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('8VDJOUIEOJ', '1b1a551db869f7a5e9eb341f9706631d');

const search = instantsearch({
  indexName: 'netlify_4a4b6f4b-2416-48e6-a343-683e915e9cdf_main_all',
  searchClient,
});


export default function Home() {
  return (
	<div className="container">
      <Head>
        <title>Testbed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
	
      <main>
        <Header title="Testbed" />

		<p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
		<p>New paragraph of plain text added</p>
		<a href="searchforme">A page to test the search</a>

		<form name="contact" action="thanks" netlify>
		  <p>
			<label>Name <input type="text" name="name" /></label>
		  </p>
		  <p>
			<label>Email <input type="email" name="email" /></label>
		  </p>
		   <textarea name="message"cols="30" rows="10" placeholder="Your Message"></textarea>
		  <p>
			<button type="submit">Send</button>
		  </p>
		</form>

      </main>

      <Footer />
    </div>
  )
}
