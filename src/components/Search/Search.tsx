import { Container, Typography } from '@mui/material'
import { useState } from 'react'
import s from './Search.module.scss'
import SearchInput from './SearchInput'

const titleStyles = {
    color: '#fff',
    fontSize: '36px',
    fontWeight: '600'
}

const Search = () => {

    const [searchValue, setSearchValue] = useState<string>('')

    const changeSearchValue = (value: string) => { setSearchValue(value) }
    const searchHandler = () => { console.log(searchValue) }

    return (
        <section className={s.search}>
            <Container maxWidth="xl">
                <Typography
                    align="center"
                    variant="h1"
                    sx={titleStyles}
                >
                    IP Address Tracker
                </Typography>
                <div className={s.holder}>
                    <SearchInput 
                        searchValue={searchValue} 
                        changeSearchValue={changeSearchValue}
                        searchHandler={searchHandler} 
                    />
                </div>
            </Container>
        </section>
    )
}

export default Search