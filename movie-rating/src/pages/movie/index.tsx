import {Segment, Header, Loader, Grid, Image, List} from "semantic-ui-react";
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";

import {fetchMovieDetails} from "./query";

export const Movie = () => {
    const {id} = useParams<string>();

    if (!id) {
        return (
            <div style={{marginTop: 50, fontSize: 24, color: "black"}}>
                Invalid Movie ID
            </div>
        );
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data, isLoading} = useQuery({
        queryKey: ["movie"],
        queryFn: () => fetchMovieDetails(id),
    });

    if (isLoading) {
        return <Loader active />;
    }

    return (
        <div style={{marginTop: 50}}>
            <Segment>
                <Header>{data.title}</Header>
                <Grid
                    columns={2}
                    divided
                    textAlign="left"
                    style={{marginTop: 20}}
                >
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                }}
                            >
                                <Image
                                    src={`http://image.tmdb.org/t/p/original/${data.poster_path}`}
                                    size="medium"
                                    centered
                                />
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <List>
                                <List.Item>
                                    <List.Header>## Release Date: </List.Header>
                                    {data.release_date}
                                </List.Item>
                                <List.Item>
                                    <List.Header>## Link to IMDB: </List.Header>
                                    {`https://www.imdb.com/title/${data.imdb_id}/`}
                                </List.Item>
                                <List.Item>
                                    <List.Header>## Runtime: </List.Header>
                                    {data.runtime}
                                </List.Item>
                                <List.Item>
                                    <List.Header>## Genres: </List.Header>
                                    {data.genres.map((genre: any) => (
                                        <List.Item key={genre.id}>
                                            {genre.name}
                                        </List.Item>
                                    ))}
                                </List.Item>
                                <List.Item>
                                    <List.Header>## Popularity: </List.Header>
                                    {data.popularity}
                                </List.Item>
                                <List.Item>
                                    <List.Header>## Revenue: </List.Header>
                                    {data.revenue}
                                </List.Item>
                                <List.Item>
                                    <List.Header>## Budget: </List.Header>
                                    {data.budget}
                                </List.Item>
                                <List.Item>
                                    <List.Header>
                                        ## Production Companies:
                                    </List.Header>
                                    {data.production_companies
                                        .map((company: any) => company.name)
                                        .join(", ")}
                                </List.Item>
                                <List.Item>
                                    <List.Header>## Language: </List.Header>
                                    {data.original_language}
                                </List.Item>
                                <List.Item>
                                    <List.Header>## Overview: </List.Header>
                                    {data.overview}
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
};
