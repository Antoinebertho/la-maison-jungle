import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	/*la fonction vérifie si un panier d’achat existe dans le stockage local du navigateur en utilisant localStorage.getItem('cart'). Si un panier existe, il est récupéré et converti en objet JavaScript à l’aide de JSON.parse(savedCart), sinon un tableau vide est utilisé comme valeur initiale pour l’état du panier. 
	la fonction utilise useState pour créer une variable d’état appelée cart et une fonction de mise à jour appelée updateCart. La valeur initiale de cart est définie par la valeur récupérée du stockage local ou un tableau vide.
	La fonction utilise également useEffect pour mettre à jour le stockage local chaque fois que l’état du panier change. Lorsque cart change, la fonction de rappel passée à useEffect est exécutée et met à jour le stockage local avec la nouvelle valeur de cart en utilisant localStorage.setItem('cart', JSON.stringify(cart)).*/
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App