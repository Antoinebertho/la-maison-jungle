import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import CareScale from './CareScale'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

function handleClick() {
  console.log('✨ Ceci est un clic ✨')
}

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}
						{plant.isBestSale && <span>🔥</span>}
						{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
						<CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList