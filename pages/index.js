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

		<form name="contact" method="POST" data-netlify="true">
		  <input type="hidden" name="subject" value="Contact email from test netlify" />
		  <p>
			<label>Your Name: <input type="text" name="name" /></label>
		  </p>
		  <p>
			<label>Your Email: <input type="email" name="email" /></label>
		  </p>
		  <p>
			<label>Your Role: <select name="role[]" multiple>
			  <option value="leader">Leader</option>
			  <option value="follower">Follower</option>
			</select></label>
		  </p>
		  <p>
			<label>Message: <textarea name="message"></textarea></label>
		  </p>
		  <p>
			<button type="submit">Send</button>
		  </p>
		</form>
      </main>

      <Footer />
    </div>
  )
}
