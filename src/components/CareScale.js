import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


/*Ce code définit un composant de fonction CareScale en React. Il prend deux props: scaleValue et careType. Le composant affiche une série d’icônes de soleil ou d’eau en fonction de la valeur de careType. Le nombre d’icônes affichées dépend de la valeur de scaleValue.
Lorsque vous cliquez sur le composant, une alerte s’affiche pour indiquer la quantité de lumière ou d’eau requise par la plante en utilisant l’objet quantityLabel pour obtenir la chaîne appropriée.*/
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}
function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale