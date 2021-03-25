import './css/App.css';
import { useState } from 'react';
import Fruit from './components/Fruit';
import Form from './components/Form';

function App() {
	const [fruitCount, setFruitCount] = useState({
		strawberry: 0,
		banana: 0,
		kiwi: 0,
		apple: 0,
	});

	function resetCounters() {
		setFruitCount({
			strawberry: 0,
			banana: 0,
			kiwi: 0,
			apple: 0,
		});
	}

	return (
		<>
			<h1>Fruitmand bezorgservice</h1>
			<div className="container">
				<div className="component-container fruit-container">
					<Fruit
						fruit={{
							name: 'Aardbeien',
							emoji: '🍓',
							type: 'strawberry'
						}}
						fruitCount={fruitCount}
						setFruitCount={setFruitCount}

					/>
					<Fruit
						fruit={{
							name: 'Bananen',
							emoji: '🍌',
							type: 'banana'
						}}
						fruitCount={fruitCount}
						setFruitCount={setFruitCount}
					/>
					<Fruit
						fruit={{
							name: 'Appels',
							emoji: '🍏',
							type: 'apple'
						}}
						fruitCount={fruitCount}
						setFruitCount={setFruitCount}
					/>
					<Fruit
						fruit={{
							name: "Kiwi's",
							emoji: '🥝',
							type: 'kiwi'
						}}
						fruitCount={fruitCount}
						setFruitCount={setFruitCount}
					/>
					<button className="reset-btn" type="button" onClick={() => resetCounters()}>
						Reset
					</button>
				</div>
				<div className="component-container form-container">
					<Form />
				</div>
			</div>
		</>
	);
}

export default App;
