import { useAppSelector } from '../../hooks'

import ResultCard from './ResultCard/ResultCard'
import { ThreeDots } from  'react-loader-spinner'

import s from './SearchResult.module.scss'

const SearchResult = () => {

    const { isLoading, searchResult } = useAppSelector(state => state.search)

    return (
        <div className={s.result}>
            {!isLoading && searchResult && (
                <ResultCard
                    ip={searchResult?.ip}
                    isp={searchResult?.isp}
                    location={searchResult?.location} 
                />
            )}
            {isLoading && (
                <div className={s['loader-holder']}>
                    <ThreeDots color="#4b0082" />
                </div>
            )}
        </div>
    )
}

export default SearchResult