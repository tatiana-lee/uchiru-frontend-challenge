import { useContext } from 'react'
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import CatsContext from '../context/CatsContext'

function Card({ catImg }) {
	const [likes] = useState(
		JSON.parse(localStorage.getItem('likes')) || []
	)
	const {showMyCats} = useContext(CatsContext)
	const isLiked = likes.includes(catImg.id)

	const setLike = () => {
		let likes = JSON.parse(localStorage.getItem('likes')) || []
		let btn = document.getElementById(catImg.id)
		if (likes.includes(catImg.id)) {
			let filteredLikes = likes.filter((e) => e !== catImg.id)
			console.log(filteredLikes)
			localStorage.setItem('likes', JSON.stringify(filteredLikes))
			btn.className = btn.className.replace(' btn-error', '')
			showMyCats()
		} else {
			likes.push(catImg.id)
			localStorage.setItem('likes', JSON.stringify(likes))
			btn.className += ' btn-error'
		}
	}



	return (
		<div className='w-56 h-56 bg-white rounded-md shadow-md relative flex hover:scale-105 transition ease-in-out delay-150'>
			<img
				className='w-56 h-56 rounded-md object-cover'
				src={catImg.url}
				alt='cats'
			/>
			{isLiked ? (
				<button
					className='btn btn-circle btn-xs absolute bottom-3 right-3 shadow-md btn-error'
					onClick={setLike}
					id={catImg.id}
				>
					<FaHeart />
				</button>
			) : (
				<button
					className='btn btn-circle btn-xs absolute bottom-3 right-3 shadow-md'
					onClick={setLike}
					id={catImg.id}
				>
					<FaHeart />
				</button>
			)}
		</div>
	)
}
export default Card
