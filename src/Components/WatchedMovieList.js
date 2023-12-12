import WatchedMovie from "./WatchedMovie";
function WatchedMovieList({ watched, onDeletWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeletWatched={onDeletWatched}
        />
      ))}
    </ul>
  );
}
export default WatchedMovieList;
