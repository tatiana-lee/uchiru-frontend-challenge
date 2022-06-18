import CatsList from './components/CatsList'
import Header from './components/Header'
import { CatsProvider } from './context/CatsContext'

function App() {
	return (
		<CatsProvider>
			<div className='App'>
				<Header />
				<div className='flex justify-center'>
					<CatsList />
				</div>
			</div>
		</CatsProvider>
	)
}

export default App
