import Switcher from "./components/Switcher";
import Title from "./components/Title";
import Image from "./components/Image";
import Facts from "./components/Facts";
import Credits from "./components/Credits";


export default function App() {
  return (
		<div>
			<header>
				<Switcher />
			</header>
			<main>
				<Title />
				<Image />
				<Facts />
			</main>
			<footer>
				<Credits />
			</footer>
		</div>
  )
}