export const mutationLogin = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGY1NDViM2YwOTgxNmFmN2Q1MmFlZWUxNjAxMjFjNSIsInN1YiI6IjY1NjVkODliNmMwYjM2MDEwMWZiM2MwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H9Ptj7U_4a_YAQIphMJPxZiwR2U8msKTEaPFly-3aLE",
            },
        }
    );

    return res.json();
};
