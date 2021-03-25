import { useForm } from 'react-hook-form';
import Input from './Input';
import RadioButton from './RadioButton';

function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		mode: 'onTouched',
	});
	const onSubmit = (data) => console.log(data);
	const selectedFrequency = watch('delivery');

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				name="firstName"
				type="text"
				fieldRef={register({
					required: {
						value: true,
						message: 'Verplicht veld',
					},
				})}
				error={errors.firstName && <span>{errors.firstName.message}</span>}
			>
				Voornaam
			</Input>
			<Input
				name="lastName"
				type="text"
				fieldRef={register({
					required: {
						value: true,
						message: 'Verplicht veld',
					},
				})}
				error={errors.lastName && <span>{errors.lastName.message}</span>}
			>
				Achternaam
			</Input>
			<Input
				name="age"
				type="number"
				fieldRef={register({
					required: {
						value: true,
						message: 'Verplicht veld',
					},
					min: {
						value: 18,
						message: 'Je moet minimaal 18 jaar oud zijn.',
					},
				})}
				error={errors.age && <span>{errors.age.message}</span>}
			>
				Leeftijd
			</Input>
			<Input
				name="postcode"
				type="text"
				fieldRef={register({
					required: {
						value: true,
						message: 'Verplicht veld',
					},
					pattern: {
						value: /^\d{4}[A-Za-z]{2}$/,
						message: 'Postcode moet uit 4 cijfers en 2 letters bestaan.',
					},
				})}
				error={errors.postcode && <span>{errors.postcode.message}</span>}
			>
				Postcode
			</Input>
			<Input
				name="houseNumber"
				type="number"
				fieldRef={register({
					required: {
						value: true,
						message: 'Verplicht veld!',
					},
				})}
				error={errors.houseNumber && <span>{errors.houseNumber.message}</span>}
			>
				Huisnummer (zonder toevoeging)
			</Input>

			<h2>Bezorgfrequentie</h2>
			<ul>
				<RadioButton
					value="weekly"
					list="delivery"
					fieldRef={register({ required: true })}
				>
					Iedere week
				</RadioButton>
				<RadioButton
					value="biweekly"
					list="delivery"
					fieldRef={register({ required: true })}
				>
					Om de week
				</RadioButton>
				<RadioButton
					value="monthly"
					list="delivery"
					fieldRef={register({ required: true })}
				>
					Iedere maand
				</RadioButton>
				<RadioButton
					value="other"
					list="delivery"
					fieldRef={register({ required: true })}
				>
					Anders
				</RadioButton>
			</ul>
			{errors.delivery && <p>Je moet een van de opties kiezen.</p>}
			{selectedFrequency === 'other' && (
				<Input
					name="otherFrequency"
					type="text"
					fieldRef={register({
						required: {
							value: true,
							message: 'Vul een andere bezorgfrequentie in.',
						},
					})}
					error={
						errors.otherFrequency && (
							<span>{errors.otherFrequency.message}</span>
						)
					}
				>
					Namelijk:
				</Input>
			)}

			<Input
				name="terms"
				type="checkbox"
				fieldRef={register({
					required: {
						value: true,
						message: 'Je moet akkoord gaan met de voorwaarden.',
					},
				})}
				error={errors.terms && <p>{errors.terms.message}</p>}
			>
				Ik ga akkoord met de algemene voorwaarden
			</Input>

			<button type="submit">Verzenden</button>
		</form>
	);
}

export default Form;
