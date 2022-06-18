import { useContext } from 'react'
import CatsContext from '../context/CatsContext'
import Card from './Card'

function CatsList() {
	const { catsList } = useContext(CatsContext)

	return (
		<div className='grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-4 sm:grid-cols-2 place-items-center'>
			{catsList?.map((item) => (
				<Card catImg={item} key={item.id} />
			))}
		</div>
	)
}
export default CatsList
