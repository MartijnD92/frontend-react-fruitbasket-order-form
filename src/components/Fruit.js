export default function Fruit({ fruit, fruitCount, setFruitCount }) {
	function handleClick(calc) {
		if (fruitCount[fruit.type] > 0) {
			if (calc === 'subtract') {
				setFruitCount({
					...fruitCount,
					[fruit.type]: fruitCount[fruit.type] - 1,
				});
			}
		}
		if (calc === 'add') {
			setFruitCount({
				...fruitCount,
				[fruit.type]: fruitCount[fruit.type] + 1,
			});
		}
	}

	return (
		<div className="fruit-counter" style={{border: fruitCount[fruit.type] > 0 ? '2px solid #e41b61' : ''}}>
			<span className="img">{fruit.emoji}</span>
			<h1>{fruit.name}</h1>
			<button className='counter-btn' type="button" onClick={() => handleClick('subtract')}>
				-
			</button>
			<p>{fruitCount[fruit.type]}</p>
			<button className='counter-btn' type="button" onClick={() => handleClick('add')}>
				+
			</button>
		</div>
	);
}
