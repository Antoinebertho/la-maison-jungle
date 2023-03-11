import { logo } from '../assets/logo.png';
import '../styles/Banner.css';

function Recommendation() {
  const currentMonth = new Date().getMonth()
  const isSpring = currentMonth >= 2 && currentMonth <= 5

  if (!isSpring) {
    return <div className='lmj-reco'>Ce n'est pas le moment de rempoter</div>
  }
     return <div>C'est le printemps, rempotez !</div>
}

export default Recommendation;