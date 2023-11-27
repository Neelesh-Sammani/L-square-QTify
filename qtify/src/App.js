import { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Section from './Components/Section';
import FilterSection from './Components/FilterSection';
import React from 'react';


function App() {

  const [topAlbums,setTopAlbums] = useState([]);
  const [newAlbums,setNewAlbums] = useState([]);
  const [songs,setSongs] = useState([]);
  const [genres,setGenres] = useState([]);
  const [filteredSongs,setFilteredSongs] =useState([]);

  const ENDPOINT = 'https://qtify-backend-labs.crio.do/';

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`)
    .then(({data}) => {
      setTopAlbums(data);
    })

    axios.get(`${ENDPOINT}albums/new`)
    .then(({data}) => {
      setNewAlbums(data);
    })

    axios.get(`${ENDPOINT}songs`)
    .then(({data}) => {
      setSongs(data);
      setFilteredSongs(data);
    })

    axios.get(`${ENDPOINT}genres`)
    .then((res)=>{
      setGenres([{key:'all',label:'All'},...res.data.data]);
    })

  },[]);

  return (
    <>
    <Navbar />
    <HeroSection />
    <Section title="Top Albums" data={topAlbums} navId="ta" />
    <Section title="New Albums" data={newAlbums} navId='na' />
    <FilterSection title="Songs" data={filteredSongs} filters={genres}
    executeFilter={(genre)=>{
      if(genre==='all'){
        setFilteredSongs(songs);
      }
      else{
        setFilteredSongs(songs.filter(song => song.genre.key===genre));
      }
    }} navId='s' />
    </>
  );
}

export default App; 
