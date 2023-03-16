import React, { useState, useEffect } from 'react';
import { getRandomJoke } from '../services/axiosService';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ChuckComponent = () => {
    
    const [joke, setJoke] = useState(null);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [opinar, setOpinar] = useState(true);
    

    useEffect(() => {
       obtainJoke();
    }, [])

	const obtainJoke = () => {
       getRandomJoke()
           .then((response) => {
           	   if(response.status == 200){
           	   	  console.log('response: ', response.data);
                  setJoke(response.data);
           	   }
           })
           .catch((error) => {
           	  alert(`ha ocurrido un error ${error}`);
           })
	}

	const likes = () => {
    	if(opinar){
    		setLike(like + 1);
            setOpinar(false);
    	}
    }

    const disLikes = () => {
    	if(opinar){
    		setDislike(dislike + 1);
    		setOpinar(false);
    	}
    }

    const darOpinion = () => {
    	setOpinar(true);
    }

    return (
        <div>
           <h2>Chistes de Chuck Norris</h2>
           { joke != null ?
           	  (
           	  	<div>
           	  	   <p>{joke.value}</p>
           	  	</div>
           	  )
           	  : null

           }
           <div style={{display:'flex', gap:'6px', justifyContent:'center', marginBottom:'10px'}}>
              <Button variant='outlined' onClick={() => likes()}><ThumbUpIcon /></Button>
              <Button variant='outlined' onClick={() => disLikes()}><ThumbDownIcon /></Button>  
           </div>

           <Button variant='contained' onClick={() => {
           	    obtainJoke();
                darOpinion();
           }}> NEW RANDOM JOKE </Button>

           <p>Te han gustado {like} chistes</p>
           <p>No te han gustado {dislike} chistes</p>
        </div>
    );
};


ChuckComponent.propTypes = {
};

export default ChuckComponent;


//nota: si el idioma del navegador esta en español los contadores
//de los likes y dislikes no van a aumentar, pero solo a la hora
//de mostrarlos en el dom.