import react from "react";
import Base from "../Base";
import Graphs from "./Graphs";
import Social from "./Social";
import TopPanel from "./TopPanel";



const Home = () => {
    return(
        <Base title="Dashboard">
            <TopPanel/>
            <Graphs/>
            <Social/>
        </Base>
    )
}


export default Home;