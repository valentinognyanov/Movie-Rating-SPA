import {useState} from "react";
import {Container, Menu, Segment, Header, Loader} from "semantic-ui-react";
import {useQuery} from "@tanstack/react-query";
import {Navigate} from "react-router-dom";

import {DisplayType} from "../home/";
import {fetchRatedMovies, fetchRatedTvShows} from "./query";
import {ColumnDisplay} from "../home/column-dysplay";

export const Rated = () => {
    const [activeTabs, setActveTabs] = useState<string>(DisplayType.Movies);

    const {data: ratedMovies, isLoading: isLoadingRatedMovies} = useQuery({
        queryKey: ["ratedMovies"],
        queryFn: fetchRatedMovies,
    });

    const {data: ratedTvShows, isLoading: isLoadingRatedTvShows} = useQuery({
        queryKey: ["ratedTvShows"],
        queryFn: fetchRatedTvShows,
    });

    if (isLoadingRatedMovies || isLoadingRatedTvShows) {
        return <Loader active />;
    }

    if (localStorage.getItem("guest_session_id") === null) {
        return <Navigate to="/auth" />;
    }

    return (
        <Container style={{marginTop: 50}}>
            <Menu pointing secondary>
                <Menu.Item
                    name="Movies"
                    active={activeTabs === DisplayType.Movies}
                    onClick={() => setActveTabs(DisplayType.Movies)}
                />
                <Menu.Item
                    name="TV Shows"
                    active={activeTabs === DisplayType.TvShows}
                    onClick={() => setActveTabs(DisplayType.TvShows)}
                />
            </Menu>
            <Segment>
                {activeTabs === DisplayType.Movies ? (
                    <div>
                        <Header as={"h2"}>Rated Movies</Header>
                        <ColumnDisplay
                            data={ratedMovies.results}
                            displayType={DisplayType.Movies}
                            isRated
                        />
                    </div>
                ) : (
                    <div>
                        <Header as={"h2"}>Rated TV Shows</Header>
                        <ColumnDisplay
                            data={ratedTvShows.results}
                            displayType={DisplayType.TvShows}
                            isRated
                        />
                    </div>
                )}
            </Segment>
        </Container>
    );
};
