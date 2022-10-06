import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from "react";

export default function Title({catMode}) {
	const [praise, setPraise] = useState("Rule");
	useEffect(() => {
    const praises = ['Rule', 'Are Awesome', 'Are Great', 'Are the Best', 'FTW', 'Forever'];
		const random = Math.floor(Math.random() * praises.length);
		setPraise(praises[random]);
  }, [catMode]);
  return (
		<h1 id="heading">
			<FontAwesomeIcon icon={catMode ? faCat : faDog} /><FontAwesomeIcon icon={catMode ? faCat : faDog} />
			{catMode ? "Cats" : "Dogs"} {praise}
			<FontAwesomeIcon icon={catMode ? faCat : faDog} flip="horizontal" /><FontAwesomeIcon icon={catMode ? faCat : faDog} flip="horizontal" />
		</h1>
  )
}