import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faCat } from '@fortawesome/free-solid-svg-icons'

export default function Switcher() {
  return (
		<label id="switch">
				<input type="checkbox" id="catMode" />
				<span id="slider"><FontAwesomeIcon icon={faDog} /><FontAwesomeIcon icon={faCat} /></span>
		</label>
  )
}