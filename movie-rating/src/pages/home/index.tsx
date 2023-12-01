import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {Button} from "semantic-ui-react";

import {fetchMovies, fetchTvShows} from "./query";

import {ColumnDisplay} from "./column-dysplay";

export enum DisplayType {
    Movies = "movies",
    TvShows = "tvshows",
}

export const Home = () => {
    const [dysplayType, setDisplayType] = useState<DisplayType>(
        DisplayType.Movies
    );

    const {data: movieData, isLoading: isLoadingMovies} = useQuery({
        queryKey: ["movies"],
        queryFn: fetchMovies,
    });
    const {data: tvShowData, isLoading: isLoadingTvShows} = useQuery({
        queryKey: ["tvshows"],
        queryFn: fetchTvShows,
    });

    return (
        <div style={{marginTop: 50, height: "auto"}}>
            <Button.Group>
                <Button
                    color={
                        dysplayType === DisplayType.Movies ? "blue" : undefined
                    }
                    onClick={() => setDisplayType(DisplayType.Movies)}
                >
                    Movies
                </Button>
                <Button
                    color={
                        dysplayType === DisplayType.TvShows ? "blue" : undefined
                    }
                    onClick={() => setDisplayType(DisplayType.TvShows)}
                >
                    TV Shows
                </Button>
            </Button.Group>

            {isLoadingMovies || isLoadingTvShows ? (
                <div style={{marginTop: 50, fontSize: 30}}>Loading...</div>
            ) : (
                <div style={{marginTop: 20}}>
                    {dysplayType === DisplayType.Movies ? (
                        <ColumnDisplay
                            data={movieData.results}
                            displayType={DisplayType.Movies}
                        />
                    ) : (
                        <ColumnDisplay
                            data={tvShowData.results}
                            displayType={DisplayType.TvShows}
                        />
                    )}
                </div>
            )}
        </div>
    );
};
