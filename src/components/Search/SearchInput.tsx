import { Input } from '@mui/material'

interface IInputProps {
    searchValue: string
    changeSearchValue: (value: string) => void
}

const SearchInput = ({ searchValue, changeSearchValue }: IInputProps) => {

    return (
        <Input
            autoFocus={true}
            value={searchValue}
            onChange={(e) => changeSearchValue(e.target.value)} 
        />
    )
}

export default SearchInput