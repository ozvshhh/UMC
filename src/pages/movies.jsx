import React ,{useEffect, useState} from "react";
import { Movie_title } from "./movie_title";
import { Movie_detail } from "./movie_detail";
import { Movie_view } from "./movie_view";

import styled, { css } from "styled-components";
//import style from "../pages/movies.css";

import {movies} from "../data/api";
import { StyledMovies } from "./movies.style";

export default function Movies(props) 
{
  const[results,setResults] = useState(movies.results.slice(0,16))
  const[mod,setMod] = useState(0)


  console.log(results[0])
  return(
    <StyledMovies>
      <div className="top_margin"></div>
      <div className="movies_container">
        <div className="movies">
          {results.map((v,i)=>{
            return(<div className="movie_view">
            <Movie_view results={v} index={i}/>
            </div>)})}
        </div>
      </div>
  </StyledMovies>)
  
}
