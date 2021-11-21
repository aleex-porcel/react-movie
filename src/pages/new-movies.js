import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { API, URL_API } from "./../utils/constants";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";
import MovieCatalog from "../Components/MovieCatalog/MovieCatalog";
import Pagination from "../Components/Pagination";

export default function NewMovies() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/now_playing?api_key=${API}&lenguage=es-ES&page=${page}`
      );
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };
  
  return (
    <Row>
      <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
          Ultimos Lanzamientos
        </h1>
      </Col>

      {movieList.results ? (
        <Row>
          <Col span="24">
            <MovieCatalog movies={movieList} />
          </Col>

          <Col span="24">
            <Pagination
              currentPage={movieList.page}
              totalItems={movieList.total_results}
              onChangePages={onChangePage}
            />
          </Col>
        </Row>
      ) : (
        <Col span="24">
          <Loading />
        </Col>
      )}

      <Col span="24">
        <Footer></Footer>
      </Col>
    </Row>
  );
}
