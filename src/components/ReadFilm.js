import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ReadFilm() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    axios.get(`https://6712c3686c5f5ced6624968b.mockapi.io/filmes/${id}`)
      .then(response => setFilm(response.data))
      .catch(error => console.log(error));
  }, [id]);

  if (!film) return <p>Carregando...</p>;

  return (
    <div className='container'>
      <h3>Detalhes do Filme</h3>
      <p><strong>ID:</strong> {film.id}</p>
      <p><strong>Nome:</strong> {film.nome}</p>
      <p><strong>Gênero:</strong> {film.genero}</p>
      <p><strong>Ano:</strong> {film.ano}</p>
      <Link to="/" className="btn btn-primary">Cancelar</Link>
    </div>
  );
}

export default ReadFilm;
