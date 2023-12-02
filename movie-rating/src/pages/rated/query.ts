export const fetchRatedMovies = async () => {
    const res = await fetch(
        `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
            "guest_session_id"
        )}/rated/movies?language=en-US&page=1&sort_by=created_at.asc`,
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGY1NDViM2YwOTgxNmFmN2Q1MmFlZWUxNjAxMjFjNSIsInN1YiI6IjY1NjVkODliNmMwYjM2MDEwMWZiM2MwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H9Ptj7U_4a_YAQIphMJPxZiwR2U8msKTEaPFly-3aLE",
            },
        }
    );

    return res.json();
};

export const fetchRatedTvShows = async () => {
    const res = await fetch(
        `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
            "guest_session_id"
        )}/rated/tv?language=en-US&page=1&sort_by=created_at.asc`,
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGY1NDViM2YwOTgxNmFmN2Q1MmFlZWUxNjAxMjFjNSIsInN1YiI6IjY1NjVkODliNmMwYjM2MDEwMWZiM2MwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H9Ptj7U_4a_YAQIphMJPxZiwR2U8msKTEaPFly-3aLE",
            },
        }
    );

    return res.json();
};
