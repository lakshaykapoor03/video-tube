import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils.js/menuSlice";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Suggestions from "./Suggestions";
import { API_KEY, SEARCH_API , SUGGESTIONS_API } from '../Utils.js/Constants'
import Store from "../Utils.js/Store";







const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const getSuggestions = async () => {
    const data = await fetch(SUGGESTIONS_API + searchText);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
  };

  const getVideoResult= async()=>{
    const data = await fetch(SEARCH_API+suggestions+"&key="+ API_KEY)
    const json = await data.json()
    console.log(json)
}

  console.log(searchText);

  useEffect(() => {
    getSuggestions();
    getVideoResult()
  }, [searchText]);

  const dispatch = useDispatch();

  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=" flex justify-between m-2 p-2 shadow-md">
      <div className="flex">
        <button onClick={() => toggleMenuhandler()}>🟰</button>
        <Link>
          <img
            className="bg-white w-14 mx-2"
            src="https://image.similarpng.com/thumbnail/2021/01/Youtube-player-icon-on-transparent-background-PNG.png"
            alt=""
            srcSet=""
          />
        </Link>
      </div>
      <div className="">
        <div>
          <input
            className="outline rounded-l-full px-2"
            type="text"
            name=""
            id=""
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button className=" px-2 outline  rounded-r-full ">Search</button>
        </div>
        {showSuggestions && (
          <div className="w-60 absolute bg-white list-none p-2 m-2 shadow-lg rounded cursor-pointer">
            {suggestions.map((suggestion) => (
             <Link to={"/results?q="+ suggestion}> <li onClick={()=> getVideoResult()} className="hover:bg-slate-100">{suggestion}</li>
             </Link>
            ))}
          </div>
        )}
      </div>
      <div className="">
        <button className="rounded px-2 bg-sky-500 text-white">SignUp</button>
      </div>
    </div>
  );
};

export default Header;
