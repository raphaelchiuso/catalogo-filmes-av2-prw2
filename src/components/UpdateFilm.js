import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UpdateFilm() {
    const [id, setId] = useState('');
    const [filme, setFilme] = useState(null);
    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [ano, setAno] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const navigate = useNavigate();

    const buscarFilme = () => {
        axios.get(`https://6712c3686c5f5ced6624968b.mockapi.io/filmes/${id}`)
            .then(response => {
                setFilme(response.data);
                setNome(response.data.nome);
                setGenero(response.data.genero);
                setAno(response.data.ano);
                setMensagemErro('');
            })
            .catch(err => {
                setFilme(null);
                setMensagemErro('Filme não encontrado.');
                console.error(err);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://6712c3686c5f5ced6624968b.mockapi.io/filmes/${id}`, {
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
            <h2>Alterar Filme</h2>
            {!filme ? (
                <div>
                    <div className="mb-3">
                        <label className="form-label">ID do Filme</label>
                        <input
                            type="text"
                            className="form-control"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="Digite o ID do filme"
                        />
                    </div>
                    <button onClick={buscarFilme} className="btn btn-primary">Procurar</button>
                    <button
                        className="btn btn-secondary ms-2"
                        onClick={() => navigate('/')}
                    >
                        Cancelar
                    </button>
                    {mensagemErro && <div className="text-danger mt-2">{mensagemErro}</div>}
                </div>
            ) : (
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
                    <button type="submit" className="btn btn-primary">Alterar</button>
                    <button
                        className="btn btn-secondary ms-2"
                        onClick={() => navigate('/')}
                    >
                        Cancelar
                    </button>
                </form>
            )}
        </div>
    );
}

export default UpdateFilm;
