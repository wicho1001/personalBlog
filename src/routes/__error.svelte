<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`,
        error
			}
		};
	}
</script>

<script>
	export let title;
	export let error;
  console.log(title)
  console.log(error)
</script>

<h1>{title}</h1>