import { Outlet, useNavigate } from "react-router-dom";
import HeroCard from "./HeroCard";

const HeroesList = (props) => {
    const navigate = useNavigate();

    const showHeroCard = (index) => navigate(`/heroes/hero/${index}`);

    return (

        <div>
            <Outlet />

            {props.data?.results &&
                props.data.results.map((item) => (
                    <HeroCard key={item.id} onClick={() => showHeroCard(item.id)} className="Hero-Card">
                        <div>
                            <p>{item.name}</p>
                            <p>{item.status}</p>
                            <p>{item.air_date}</p>
                        </div>
                        <img src={item.image}></img>
                    </HeroCard>
                ))}
        </div>
    )
}

export default HeroesList;

