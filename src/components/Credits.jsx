export default function Credits({catMode}) {
  return (
		<>
			<p><a href={catMode ? "https://catfact.ninja/" : "https://kinduff.github.io/dog-api/"} id="facts-link" target="_blank" rel="noreferrer"><span class="pet"></span>{catMode ? "Cat" : "Dog"} facts</a></p>
      <p><a href={catMode ? "https://thecatapi.com/" : "https://dog.ceo/dog-api/"} id="photos-link" target="_blank" rel="noreferrer"><span class="pet"></span>{catMode ? "Cat" : "Dog"} photos</a></p>
		</>
  )
}