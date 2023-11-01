import React,{useState} from "react";
//import style from"./movie_title.css"

import { Movie_title } from "./movie_title";
import { Movie_detail } from "./movie_detail";

export function Movie_view(props) {

  const[mod,setMod] = useState(0);

  return (
        <div onClick={()=>{setMod(mod===0 ? 1:0)}}>
        {mod===0 ? <Movie_title results={props.results} index={props.index}/> : <Movie_detail results={props.results} index={props.index}/>}
        </div>
  );
}
