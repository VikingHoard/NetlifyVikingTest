export default function Header({ title }) {
  return <h1 className="title">{title}</h1>
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

}
