import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import XMLParser from 'react-xml-parser';



const Lyric = ({songName, artistName}) => {
  const [isLoading, setLoading] = useState(false);
  const [lyrics, setLyrics] = useState(null);

  const getData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://intense-mesa-62220.herokuapp.com/http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${artistName}&song=${songName}`
    );
    var xml = new XMLParser().parseFromString(data); 
    const data1 = xml.children[9].value.slice(0,700)+'...☞'
    setLyrics(data1);
    setLoading(false);
  }

  useEffect(async () => {
    getData()
  }, [songName]);

  return (
    <div className="lyrics">
    <div>{songName.split('%20').join(' ').toLowerCase()}</div>
      {isLoading ? <div>loading...</div> : <div>{lyrics}</div>}
    </div>
  )
}

export default Lyric
