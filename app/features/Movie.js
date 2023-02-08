import Link from 'next/link';
import Image from 'next/image';

export default function Movie({ movie }) {
  const imagePath = 'https://image.tmdb.org/t/p/original';
  return (
    <div className='flex flex-col items-center mt-10'>
      <h1>{movie.title}</h1>
      <h2>{movie.release_date}</h2>
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={imagePath + movie.poster_path}
          width={200}
          height={50}
          alt=''
        />
      </Link>
    </div>
  );
}
