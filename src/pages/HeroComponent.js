import * as React from 'react';
import { useState } from "react";
import HttpFetchHeroes from "../hooks/HttpFetchHeroes";
import EnhancedTable from '../components/HeroesListTable';

const HttpHeroComponent = () => {
    const [page, setPage] = useState(1);
    const { data, loading } = HttpFetchHeroes(`character?page=${page}`);

    const handleChangePage = (event, newPage) => {
        console.log('event', event);
        console.log('new page', newPage)
        setPage(newPage);
    };

    console.log(data)

    return <div className="Main-div">
        <div>
            {loading ? <p>Loading...</p> :
                <EnhancedTable data={data}
                    count={data.info.count}
                    rowsPerPage={data.results.length}
                    page={page}
                    onPageChange={handleChangePage}
                />}
        </div>
    </div>
}

export default HttpHeroComponent;

