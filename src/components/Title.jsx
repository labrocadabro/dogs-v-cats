import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faCat } from '@fortawesome/free-solid-svg-icons'

export default function Title() {
  return (
		<h1 id="heading">
			<FontAwesomeIcon /><FontAwesomeIcon />
			<span class="pet"></span>s <span id="praise"></span>
			<FontAwesomeIcon /><FontAwesomeIcon />
		</h1>
  )
}