import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
 
import { catFacts } from '../data/catfacts';
import { dogFacts } from '../data/dogfacts';

export default function Facts({catMode}) {
	const [facts, setFacts] = useState([]);
	useEffect(() => {
		const temp = [];
		let length = catMode ? catFacts.length : dogFacts.length;
		for (let i = 0; i < 4; i++) {
			let index = Math.floor(Math.random() * length);
			temp.push(catMode ? catFacts[index] : dogFacts[index]);
		}
		setFacts(temp.map(el => <li><FontAwesomeIcon icon={faPaw} />{el}</li>));
	}, [catMode]);
  return (
		<p id="facts">
			<ul>
				{facts}
			</ul>
		</p>
  )
}