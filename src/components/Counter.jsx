import { useState } from "react";

const Counter = (props) => {
	const [counters, setCounters] = useState([0]);

	const addCounters = () => {
		const newCounters = [...counters];
		if (counters.length < 3) {
			newCounters.push(0);
			setCounters(newCounters);
			console.log("counters", counters);
		} else {
			alert("On ne peut pas ajouter plus de 3 compteurs");
		}
	};

const incrementOne = (index) => {
console.log("test", index);
};

	return (
		<div className="column">
			<button onClick={addCounters}>Add A counter</button>
			<div className="line">
				{counters.map((element, index) => (
					<div className="column" key={index}>
						<div className="line">
							<button>-</button>
							<p>{counters[index]}</p>
							<button onClick={incrementOne}>+</button>
						</div>
						<div>
							<button>Reset</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Counter;
