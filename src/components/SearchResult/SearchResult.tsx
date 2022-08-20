import ResultCard from './ResultCard/ResultCard'
import s from './SearchResult.module.scss'

const SearchResult = () => {

    return (
        <div className={s.result}>
            <ResultCard />
        </div>
    )
}

export default SearchResult