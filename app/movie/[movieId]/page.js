import Image from 'next/image';

export async function getStaticParams() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = await response.json();

  return movies.results.map((movie) => {
    return {
      movieId: toString(movie.id),
    };
  });
}

export default async function MovieDetailsPage({ params }) {
  const { movieId } = params;
  const imagePath = 'https://image.tmdb.org/t/p/original';

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    {
      next: { revalidate: 60 },
    }
  );
  const movie = await response.json();

  return (
    <div className='mt-10'>
      <div>
        <h1 className='text-2xl'>{movie.title}</h1>
        <h2 className='text-sm'>{movie.release_date}</h2>
        <h2 className='text-sm'>Runtime: {movie.runtime} min</h2>
        <h2 className='bg-green-600 text-sm inline-block my-2 py-1 px-2 rounded-md'>
          {movie.status}
        </h2>
        <Image
          className='my-12 w-full'
          src={imagePath + movie.backdrop_path}
          width={1000}
          height={1000}
          priority
          alt='movie-pic'
        />
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
