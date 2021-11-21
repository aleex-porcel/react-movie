import React from 'react'
import {Row, Col} from 'antd'
import useFetch from '../hooks/useFetch'
import SliderMovies from '../Components/SliderMovies'
import {URL_API, API} from '../utils/constants' 
import MovieList from '../Components/MovieList'
import Footer from '../Components/Footer/Footer'

export default function Home() {

    const newMovies = useFetch(
        `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
    );

    const popularMovies = useFetch(
        `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
    );

    const topRatedMovies = useFetch(
        `${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`
    );

    return (
      <div>
        <SliderMovies movies={newMovies} />
        <Row>
          <Col span={12}>
            <MovieList title="Peliculas Populares" movies={popularMovies} />
          </Col>

          <Col span={12}>
            <MovieList
              title="Top Mejores Peliculas Puntuadas"
              movies={topRatedMovies}
            />
          </Col>
        </Row>

        <Footer />
      </div>
    );
}
