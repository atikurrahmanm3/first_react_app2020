import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const date =new Date().toLocaleDateString();
const time =new Date().toLocaleTimeString();
const fname = "Atikur";
const lname= "Rahman";
const img1 = "https://picsum.photos/250/300"
const img2 = "https://picsum.photos/250/300"
const img3 = "https://picsum.photos/250/300"

const cssStyle={ };


let currDate = new Date();
    currDate = currDate.getHours();
let grattings = "";

    if(currDate >= 1 && currDate <12){
      grattings = "Good Morning";
      cssStyle.color = "green";
    }
    else if (currDate >=12 && currDate < 19){
      grattings = "Good Afternoon";
      cssStyle.color = "orange";
    }
    else{
      grattings = "Good Night";
      cssStyle.color = "black";
    }


ReactDOM.render(
  <>
   
    
    <div className="grettings">
      <div>
        <h1 className="heading">Atik Bhai Technical Website </h1>
          <div className="date">
            <h1 contentEditable="true" className="date">{`Hello ${fname} ${lname}, `}<span style = {cssStyle}>{grattings}!</span></h1>
            <h3>{`Today date is:${date}`}</h3>
            <h3>{`current time is:${time}`}</h3>
          </div>
      </div>
    </div>


  </>
,
  document.getElementById('root')
);


