import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Counter from "./components/Counter";

function App() {




	return (
		<>
			<header>
				<FontAwesomeIcon icon="fa-solid fa-stopwatch" className="icon" />
				<p>React Counter V2</p>
			</header>
			<main>
				<Counter />
			</main>
		</>
	);
}

export default App;
