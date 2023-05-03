import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY, SEARCH_API } from "../Utils.js/Constants";
import ResultCard from "./ResultCard";
import { Link } from "react-router-dom";

const Results = () => {
  const [params] = useSearchParams();
  const [result, setResult] = useState([]);

  const showResults = async () => {
    const data = await fetch(SEARCH_API + params.get("q") + "&key=" + API_KEY);
    const json = await data.json();
    console.log(json.items);
    setResult(json.items)
  };

  useEffect(()=>{
    showResults()
  }, [])

  console.log(params.get("q"));
  return (
  <div className="flex flex-col justify-center items-center">
      {
        result.map((result)=><Link to={"/watch?v="+ result.id.videoId}> <ResultCard key={result.id.videoId} result={result}/></Link>


        )
      }
  </div>
  )
};

export default Results;
