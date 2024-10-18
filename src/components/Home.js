import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        axios.get('https://6712c3686c5f5ced6624968b.mockapi.io/filmes')
            .then(res => setFilmes(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container mt-4">
            <h2>Catálogo de Filmes</h2>
            <div className="row">
                {filmes.map(filme => (
                    <div key={filme.id} className="col-md-4 mb-3">
                        <div className="card p-3">
                            <h5>ID: {filme.id}</h5>
                            <Link to={`/read/${filme.id}`}>
                                <h6 style={{ cursor: 'pointer', color: 'blue' }}>
                                    Nome: {filme.nome}
                                </h6>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
