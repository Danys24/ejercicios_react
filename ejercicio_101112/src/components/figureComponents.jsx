import React, { useState, useEffect } from 'react';


const figureStyle = {
	 backgroundColor : 'rgb(0,0,0)',
     width : '255px',
     height : '255px',
     textAlign : 'center'
}

const FigureComponent = () => {

	const [figure, setFigure] = useState(figureStyle);
	const [backgroundChanged, setBackgroundChanged] = useState(false);
    
    const red = (Math.random()*255);
    const green = (Math.random()*255);
    const blue = (Math.random()*255);
    
    function changeBackground(){
    	setBackgroundChanged(true);
    	setFigure(
    	      {
    	       	 backgroundColor: `rgb(${red},${green},${blue})`,
    	       	 width : '255px',
                 height : '255px',
                 textAlign : 'center'
    	       }
    		)
    }

    function unChangeBackground(){
    	setBackgroundChanged(false);
    	setFigure(
    	      {
    	       	 backgroundColor: 'rgb(0,0,0)',
    	       	 width : '255px',
                 height : '255px',
                 textAlign : 'center'
    	       }
    		)
    }

    function stopChangeBackground(){
    	setBackgroundChanged(false);
    	setFigure(
    	      {
    	       	 backgroundColor: 'rgb(0,0,0)',
    	       	 width : '255px',
                 height : '255px',
                 textAlign : 'center'
    	       }
    		)
    }

    useEffect(() => {

    	const timerID = setInterval(() => {
    		if(backgroundChanged){
    	     	changeBackground();
    	    }
    	}, 1000)

    	return () => {
			clearInterval(timerID);
		};
    	
    },[figure])

    return (
    	<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    	    <h1>Cuadrado</h1>
            <div style={figure} onMouseOver={changeBackground} 
                                onMouseOut={unChangeBackground} 
                                onDoubleClick={stopChangeBackground}></div> 	    
    	</div>
    );
};


//FigureComponent.propTypes = {
//};

export default FigureComponent;
