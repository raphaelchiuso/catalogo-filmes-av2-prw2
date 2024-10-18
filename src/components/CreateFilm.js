import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateFilm() {
    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [ano, setAno] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://6712c3686c5f5ced6624968b.mockapi.io/filmes', {
            nome,
            genero,
            ano,
        })
        .then(() => {
            navigate('/');
        })
        .catch(err => console.error(err));
    };

    return (
        <div className="container mt-4">
            <h2>Criar Filme</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gênero</label>
                    <input
                        type="text"
                        className="form-control"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ano</label>
                    <input
                        type="text"
                        className="form-control"
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Criar</button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate('/')}
                >
                    Cancelar
                </button>
            </form>
        </div>
    );
}

export default CreateFilm;
