export const rateMovie = async (movieId: number, rating: number) => {
    const options = {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGY1NDViM2YwOTgxNmFmN2Q1MmFlZWUxNjAxMjFjNSIsInN1YiI6IjY1NjVkODliNmMwYjM2MDEwMWZiM2MwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H9Ptj7U_4a_YAQIphMJPxZiwR2U8msKTEaPFly-3aLE",
        },
        body: `{"value":${rating}}`,
    };

    return await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem(
            "guest_session_id"
        )}`,
        options
    )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
};

export const rateTvShow = async (tvShowId: number, rating: number) => {
    const options = {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGY1NDViM2YwOTgxNmFmN2Q1MmFlZWUxNjAxMjFjNSIsInN1YiI6IjY1NjVkODliNmMwYjM2MDEwMWZiM2MwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H9Ptj7U_4a_YAQIphMJPxZiwR2U8msKTEaPFly-3aLE",
        },
        body: `{"value":${rating}}`,
    };

    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${tvShowId}/rating?guest_session_id=${localStorage.getItem(
            "guest_session_id"
        )}`,
        options
    );

    return res.json();
};
