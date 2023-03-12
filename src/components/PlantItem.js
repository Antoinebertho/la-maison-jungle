import CareScale from './CareScale'
import '../styles/PlantItem.css'

/*Ce code définit deux composants de fonction en React: handleClick et PlantItem. La fonction handleClick prend un argument plantName et affiche une alerte indiquant que l’utilisateur souhaite acheter une plante avec le nom spécifié.
Le composant PlantItem prend plusieurs props: id, cover, name, water et light. Il renvoie un élément de liste (li) avec une image de couverture, le nom de la plante et deux composants CareScale pour afficher les exigences en matière d’eau et de lumière. Lorsque vous cliquez sur l’élément de liste, la fonction handleClick est appelée avec le nom de la plante en argument.*/
function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}
function PlantItem({ id, cover, name, water, light }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
    <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
    {name}
    <div>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
    </div>
</li>
	)
}

export default PlantItem
