import React from 'react';

import { Link, hashHistory } from 'react-router';

export default class MovieDetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    image() {
        if (!this.state.Poster || this.state.Poster != 'N/A') {
            return <img src={ this.state.Poster } className="img-fluid" alt="" />
        } else {
            return;
        }
    }

    componentWillMount() {
        fetch(`${ process.env.REACT_APP_OMDB_API }?apikey=${ process.env.REACT_APP_OMDB_SECRET }&i=${ this.props.params.imdbID }&plot=full&r=json`) 
            .then(result=>result.json())
            .then(items=>this.setState(items));
    }

    render() {
        return (
            <div className="container container-300">
                <div className="row">
                    <div className="col-md-12">
                        <div className="search-form">
                            <h2 className="page-title">Detalhe do filme</h2>
                        </div>
                        <div className="card">
                            <div className="view overlay hm-white-slight">
                                { this.image() }
                                <Link to={ `/detail/${this.state.imdbID}` }>
                                    <div className="mask"></div>
                                </Link>
                            </div>

                            <div className="card-block">
                                <h4 className="card-title">{ this.state.Title }</h4>
                                <p className="card-text card-meta">Lançamento: { this.state.Year }, Tipo: { this.state.Type }</p>
                                
                                <strong>Enredo</strong>
                                <hr />
                                <p className="card-text">{ this.state.Plot }</p>

                                <strong>Gênero</strong>
                                <hr />
                                <p className="card-text">{ this.state.Genre }</p>

                                <strong>Diretor</strong>
                                <hr />
                                <p className="card-text">{ this.state.Director }</p>

                                <strong>Atores</strong>
                                <hr />
                                <p className="card-text">{ this.state.Actors }</p>

                                <strong>Avaliação do IMDB</strong>
                                <hr />
                                <p className="card-text"><a href={ `https://www.imdb.com/title/${ this.state.imdbID }/` } target="_blank">{ this.state.imdbRating }</a> ({ this.state.imdbVotes } Votes)</p>

                                <strong>Tempo de execução</strong>
                                <hr />
                                <p className="card-text">{ this.state.Runtime }</p>

                                <strong>Avaliado</strong>
                                <hr />
                                <p className="card-text">{ this.state.Rated }</p>

                                <strong>Data de lançamento</strong>
                                <hr />
                                <p className="card-text">{ this.state.Released }</p>

                                <strong>Pais(Idioma)</strong>
                                <hr />
                                <p className="card-text">{ this.state.Country } ({ this.state.Language })</p>

                                <strong>Produção</strong>
                                <hr />
                                <p className="card-text">{ this.state.Production }</p>

                                <div className="read-more">
                                    <button onClick={ hashHistory.goBack } className='btn btn-default'>Voltar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
