import * as React from 'react';
import { useState } from "react";
import HttpFetchHeroes from "../hooks/HttpFetchHeroes";
import EnhancedTable from '../components/HeroesListTable';

const HttpHeroComponent = () => {
    const [page, setPage] = useState(0);
    const rowsPerPage = 20;
    const offSet = page * rowsPerPage;
    const { data, loading } = HttpFetchHeroes(`character?page=${offSet / 20 + 1}`);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    console.log(data)

    return <div className="Main-div">
        <div>
            {loading ? <p>Loading...</p> :
                <EnhancedTable
                    data={data}
                    count={data.info.count}
                    rowsPerPage={data.results.length}
                    page={page}
                    onPageChange={handleChangePage}
                />}
        </div>
    </div>
}

export default HttpHeroComponent;

