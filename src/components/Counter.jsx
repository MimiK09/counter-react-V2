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
		const newCounters = [...counters];
		newCounters[index] = newCounters[index] + 1;
		setCounters(newCounters);
	};

	const decrementOne = (index) => {
		const newCounters = [...counters];
		newCounters[index] = newCounters[index] - 1;
		setCounters(newCounters);
	};

	const resetOne = (index) => {
		const newCounters = [...counters];
		newCounters[index] = 0;
		setCounters(newCounters);
	};

	return (
		<div className="column">
			<button onClick={addCounters}>Add A counter</button>
			<div className="line space">
				{counters.map((element, index) => (
					<div className="column" key={index}>
						<div className="line ">
							<button
								className="nobutton counter"
								onClick={() => {
									decrementOne(index);
								}}
							>
								-
							</button>
							<p className="counter">{element}</p>
							<button
								className="nobutton counter"
								onClick={() => {
									incrementOne(index);
								}}
							>
								+
							</button>
						</div>
						<div>
							<button
								onClick={() => {
									resetOne(index);
								}}
							>
								Reset
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Counter;
