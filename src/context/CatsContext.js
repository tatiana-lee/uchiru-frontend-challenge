import { createContext, useState, useEffect } from 'react'

const CatsContext = createContext()

export const CatsProvider = ({ children }) => {
	const [catsImgs, setCatsImgs] = useState([])
	const [catsList, setCatsList] = useState(catsImgs)

	const fetchCats = async () => {
		try {
			const response = await fetch(
				'https://api.thecatapi.com/v1/images/search?limit=100',
				{
					headers: {
						'x-api-key': '49cbed7b-1fb2-4d1f-8a02-e44879b5aec8',
					},
				}
			)
			const data = await response.json()
			setCatsImgs(data)
      setCatsList(data)
		} catch (error) {
			console.log(error)
		}
	}

	const showAllCats = () => {
		setCatsList(catsImgs)
	}

	const showMyCats = () => {
		let filteredList = catsImgs.filter((e) =>
			JSON.parse(localStorage.getItem('likes')).includes(e.id)
		)
		setCatsList(filteredList)
	}

	useEffect(() => {
		fetchCats()
	}, [])

	return (
		<CatsContext.Provider value={{ catsList, showMyCats, showAllCats }}>
			{children}
		</CatsContext.Provider>
	)
}

export default CatsContext
