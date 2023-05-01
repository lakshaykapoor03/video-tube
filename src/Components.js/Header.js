import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils.js/menuSlice";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Suggestions from "./Suggestions";
import { SUGGESTIONS_API } from "../Utils.js/Constants";
import { DOM_KEY_LOCATION } from "@testing-library/user-event/dist/keyboard/types";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async () => {
    const data = await fetch(SUGGESTIONS_API+searchText);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1])
    
  };

  useEffect(()=>{
  getSuggestions();

  }, [])
 
  const dispatch = useDispatch();

  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=" flex justify-between m-2 p-2 shadow-md">
      <div className=" flex">
        <button onClick={() => toggleMenuhandler()}>🟰</button>
        <Link><img
          className="bg-white w-14 mx-2"
          src="https://image.similarpng.com/thumbnail/2021/01/Youtube-player-icon-on-transparent-background-PNG.png"
          alt=""
          srcSet=""
        />
        </Link>
      </div>
      <div className=" ">
        <div>
          <input
            className="outline rounded-l-full "
            type="text"
            name=""
            id=""
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button  className=" px-2 outline  rounded-r-full ">Search</button>
        </div>
        <div>

        </div>
        {suggestions.map((suggestion)=> <li>{suggestion}</li> )}

        <div>
         
        </div>
      </div>
      <div className="">
        <button className="rounded px-2 bg-sky-500 text-white">SignUp</button>
      </div>
    </div>
  );
};

export default Header;
