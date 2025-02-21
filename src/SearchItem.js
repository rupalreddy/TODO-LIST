import React from 'react'

const SearchItem = ({ Search, setSearch }) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label
                className='searchForm label'
                htmlFor="search">Search</label>
            <input
                className='searchInput'
                type="text"
                id="search"
                role="searchbox"
                placeholder='Search Items'
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItem