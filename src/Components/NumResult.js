function NumResult({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> Result
    </p>
  );
}
export default NumResult;
