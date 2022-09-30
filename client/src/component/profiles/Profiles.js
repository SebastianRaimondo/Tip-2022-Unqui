import React, {useEffect, useState } from "react";
import Spinner from "../layout/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { selectProfiles } from "../../features/profileSlice";
import { getProfiles } from "../../actions/profile";
import { selectLoading } from "../../features/profileSlice";
import ProfileItem from "./ProfileItem"

const Profiles = () => {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const profiles = useSelector(selectProfiles);

  const [search,setSearch] = useState("")
 

  useEffect(() => {
    dispatch(getProfiles());
  }, []);

  const searcher = (e) => {
    setSearch(e.target.value)
  }

 let results = [] 
 
 const includesKill = (skills) =>{
   skills.includes(search)
 }

//console.log(results[0])

 if(!search){
  results = profiles
 }else{
 results = profiles.filter(pro => pro.skills.find(el => el.includes(search)))
 }

console.log(profiles)

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className='large text-primary'>Desarrolladores</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'></i>
            Busca y conectate con desarrolladores

            
          </p>

          <div className='form'>
          <input type="text" 
          placeholder="Buscar por Skills"
          value={search}
          onChange={searcher}
          />  
          </div>
          <br></br>
          <div className='profiles'>
            {results.length > 0 ? (
              results.map((result) => (
                <ProfileItem key={result._id} profile={result} />
              ))
            ) : (
              <h4> No se encontraron perfiles</h4>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profiles;
