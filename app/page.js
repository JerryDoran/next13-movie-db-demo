import Movie from './features/Movie';

export default async function HomePage() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = await response.json();

  return (
    <main>
      <div className='grid gap-6 grid-cols-fluid mx-auto'>
        {movies.results.map((movie) => (
          <Movie key={movie.title} movie={movie} />
        ))}
      </div>
    </main>
  );
}
