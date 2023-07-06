import "./App.css";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Counter from "./components/Counter";

function App() {
  
	const [counters, setCounters] = useState([<Counter initial={0}/>]);
  
	const addCounters = () => {
		const newCounters = [...counters];
		if (counters.length < 3) {
			newCounters.push(<Counter initial={0} />);
			setCounters(newCounters);
			console.log("counters", counters);
		} else {
			alert("On ne peut pas ajouter plus de 3 compteurs");
		}
	};

	return (
		<>
			<header>
				<FontAwesomeIcon icon="fa-solid fa-stopwatch" className="icon" />
				<p>React Counter V2</p>
			</header>
			<main>
				<button onClick={addCounters}>Add A counter</button>
				<div className="counters">
					{counters.map((element, index) => (
						<div key={index}>{element}</div>
					))}
				</div>
			</main>
		</>
	);
}

export default App;
