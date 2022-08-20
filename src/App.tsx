import React from 'react';
import AppMap from './components/Map/Map';
import Search from './components/Search/Search';

import s from './App.module.scss'
import { useAppSelector } from './hooks';
import SearchResult from './components/SearchResult/SearchResult';

function App() {

	const markerPosition = useAppSelector(state => {
		return [
			state.search.searchResult?.location?.lat || 55.75222, 
			state.search.searchResult?.location?.lng || 37.61556
		]
	})

	return (
		<div className={s.app}>
			<Search />
			<SearchResult />
			<AppMap
				markerPosition={markerPosition} 
			/>
		</div>
	)
}

export default App;
