import { useContext} from 'react'
import CatsContext from '../context/CatsContext'
import { FaHeart } from 'react-icons/fa'


function Header() {
	const { showAllCats, showMyCats } = useContext(CatsContext)

	return (
		<div className='sticky top-0 h-16 bg-base-200 shadow-md mb-10 flex justify-center items-center z-10'>
			<div className='grid grid-cols-2 w-1/3 gap-5'>
				<button onClick={showAllCats} className='btn'>All cats</button>
				<button onClick={showMyCats} className='btn'>
					<FaHeart />.<FaHeart /> cats
				</button>
			</div>
		</div>
	)
}
export default Header
