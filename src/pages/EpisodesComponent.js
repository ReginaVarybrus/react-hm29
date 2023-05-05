import { useState } from "react";
import EpisodesList from "../components/EpisodesList";
import HttpFetchEpisodes from "../hooks/HttpFetchEpisodes";
import EpisodesEnhancedTable from "../components/EpisodesListTable";

const EpisodesComponent = () => {
    const [page, setPage] = useState(1);

    const { data, loading } = HttpFetchEpisodes(`episode?page=${page}`);

    const handleChangePage = (event, newPage) => {
        console.log('event', event);
        console.log('new page', newPage)
        setPage(newPage);
    };

    return <div className="Main-div">
        <div>
            {loading ? <p>Loading...</p> :
                <EpisodesEnhancedTable
                    data={data}
                    count={data.info.count}
                    rowsPerPage={data.results.length}
                    page={page}
                    onPageChange={handleChangePage} />}
        </div>
    </div>
}

export default EpisodesComponent;