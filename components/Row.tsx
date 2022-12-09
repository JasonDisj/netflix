import { Movie } from "../typescript_definition";

interface Props {
  title: string;
  movies: Movie[];
}

function Row({ title, movies }: Props) {
  return <div>Row</div>;
}

export default Row;
