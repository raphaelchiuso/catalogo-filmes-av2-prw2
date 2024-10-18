import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeleteFilm() {
    const [id, setId] = useState('');
    const [filme, setFilme] = useState(null); 
    const [mensagemErro, setMensagemErro] = useState('');
    const navigate = useNavigate();

    const buscarFilme = () => {
        axios.get(`https://6712c3686c5f5ced6624968b.mockapi.io/filmes/${id}`)
            .then(response => {
                setFilme(response.data);
                setMensagemErro('');
            })
            .catch(err => {
                setFilme(null);
                setMensagemErro('Filme não encontrado.');
                console.error(err);
            });
    };

    const handleDelete = () => {
        axios.delete(`https://6712c3686c5f5ced6624968b.mockapi.io/filmes/${id}`)
            .then(() => {
                navigate('/');
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-4">
            <h2>Apagar Filme</h2>
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
                <div>
                    <p>Você tem certeza que deseja apagar o filme: <strong>{filme.nome}</strong>?</p>
                    <button onClick={handleDelete} className="btn btn-danger">Confirmar Exclusão</button>
                    <button
                        className="btn btn-secondary ms-2"
                        onClick={() => navigate('/')}
                    >
                        Cancelar
                    </button>
                </div>
            )}
        </div>
    );
}

export default DeleteFilm;
