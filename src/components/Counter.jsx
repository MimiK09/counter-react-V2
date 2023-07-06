const Counter = (props) => {
	console.log("props", props);


	return (
		<div className="counter">
			<div className="counter-mini">
				<button onClick={props.add}>-</button>
				<p>{props.initial}</p>
				<button>+</button>
			</div>
			<div>
				<button>Reset</button>
			</div>
		</div>
	);
};

export default Counter;
