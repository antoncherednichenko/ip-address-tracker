import { InputBase } from '@mui/material'
import ArrowIcon from '../ui/ArrowIcon'
import s from './SearchInput.module.scss'

interface IInputProps {
    searchValue: string
    changeSearchValue: (value: string) => void
    searchHandler: () => void
}

const SearchInput = ({ searchValue, changeSearchValue, searchHandler }: IInputProps) => {

    return (
        <label className={s.search}>
            <InputBase
                autoFocus={true}
                value={searchValue}
                onChange={(e) => changeSearchValue(e.target.value)}
                placeholder="Search for any IP address or domain"
                classes={{ root: s.search__root }}
                type="search"
            />
            <button onClick={searchHandler} className={s.search__btn} type="button">
                <ArrowIcon />
            </button>
        </label>
    )
}

export default SearchInput