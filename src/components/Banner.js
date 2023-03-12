import '../styles/Banner.css'

/*Fonction appelée Banner qui prend en paramètre un objet avec une propriété children. Cette fonction renvoie un élément div avec la classe CSS lmj-banner et le contenu de cet élément est défini par la propriété children passée en paramètre.*/
function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}

export default Banner