import Switcher from "./components/Switcher";
import Title from "./components/Title";
import Image from "./components/Image";
import Facts from "./components/Facts";
import Credits from "./components/Credits";

import { useState, useEffect } from "react";

export default function App() {
	const [catMode, setCatMode] = useState(false);
	function toggleCatMode() {
		setCatMode(oldCatMode => !oldCatMode);
	}
	useEffect(() => {
    document.body.id = catMode ? "cat" : "dog";
  }, [catMode]);
  return (
		<div>
			<header>
				<Switcher catMode={catMode} onClick={toggleCatMode} />
			</header>
			<main>
				<Title catMode={catMode} />
				<Image catMode={catMode} />
				<Facts catMode={catMode} />
			</main>
			<footer>
				<Credits catMode={catMode} />
			</footer>
		</div>
  )
}