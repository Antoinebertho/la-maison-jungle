import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import updateCart from './App'
import cart from './Cart'

/*Ce code définit un composant de fonction ShoppingList en React. À l’intérieur de ce composant, une constante categories est définie en utilisant la méthode reduce sur un tableau plantList. Cette méthode crée un nouveau tableau avec toutes les catégories uniques de plantes présentes dans le tableau plantList.
La fonction passée à la méthode reduce prend deux arguments: l’accumulateur (acc) et l’élément actuel du tableau (plant). Si l’accumulateur contient déjà la catégorie de la plante actuelle, il est renvoyé tel quel. Sinon, la catégorie est ajoutée à l’accumulateur en utilisant la méthode concat.*/ 
function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((cat) => (
                <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} />
                        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList