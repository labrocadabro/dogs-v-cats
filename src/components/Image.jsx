import { useState, useEffect } from "react";

export default function Image({catMode}) {
	const [photo, setPhoto] = useState({backgroundImage: `url("/blank.png")` });
	useEffect(() => {
		setPhoto({backgroundImage: `url("/blank.png")`});
		const url = catMode ? "https://api.thecatapi.com/v1/images/search?mime_types=jpg,png" : "https://dog.ceo/api/breeds/image/random";
		fetch(url)
			.then(res => res.json())
			.then(data => {
				const image = catMode ? data[0].url : data.message;
				setPhoto({backgroundImage: `url("${image}")`});
			}).catch(error => console.log(error));
	}, [catMode]);
  return (
		<p id="photo" style={photo}></p>
  )
}