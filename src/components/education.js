import React from "react";
import './css/card.css';
import java from './css/java.png'
import html from './css/html.png'
import boot from './css/boot.png'
import react from './css/react.png'
import dsa from './css/dsa.png'
import node from './css/node.png'
const Education =()=>{
    return(
        
    <div id='education' className="flex flex-wrap">
    <h1 className="heding flex-auto justify-center">SKILLS I POSSES</h1>
       <div class="con">
        <div class="card" >
            <div class="img-box">
                <img class="im" src={html} alt="html"/>
                
            </div>
            <div class="cont text-black">
                <h2>Html,Css,Js</h2>
                <p class="txt">
                
*Stronger in the basic 
concepts and tags of html<br></br>
*Worked with the css properties for my projects that includes different kings of animation,transitions ,etc..   
<br></br>*Created many mini games and playfull websites to make my js skills stronger
        
                </p>
                
            </div>
        </div>
        <div class="card" >
            <div class="img-box">
                <img class="im"src={java} alt="java"/>
            </div>
            <div class="cont clr ">
                <h2>JAVA</h2>
                <p class="txt">
                   *Stronger in concepts of java like polymorphism,objects,classes,funtions,methods,constructers etc..
                  <br></br> *OOPS concepts 
                  <br></br>* I use JAVA as my competitive programming language
                </p>
                </div>
        </div>
        <div class="card" >
            <div class="img-box">
                <img class="im" src={react} alt="react"/>
                
            </div>
            <div class="cont clr">
                <h2>React Js</h2>
                <p>
                   * Good in the core concepts of react like props,components,etc..<br>

                   </br>
                   * Got a huge knowlegde of react js while working in the portfolio project 
                </p>
               
            </div>
        </div>
        <div class="card" >
            <div class="img-box">
                <img class="im" src={boot} alt="botstrap "/>
            </div>
            <div class="cont clr">
                <h2 >Frontend design tools</h2>
                <p class="txt">
                    * Created and worked with using tailwindcss ,bootstrap and mui in many of my projects<br>

                    </br>
                    * Good in manipulation of css properties in tailwind and making it a responsive one
                </p>
            </div>
        </div>
        
        <div class="card" >
            <div class="img-box">
                <img class="im" src={dsa} alt='dsa'/>
                
            </div>
            <div class="cont clr">
                <h2>Data Structures</h2>
                <p class="txt">
                   *By taking place in competitive programming i got an enormous knowledge about the data structure and the algorithms use in solving the problems
                </p>
            </div>
        </div>
        <div class="card" >
            <div class="img-box">
                <img class="im" src={node} alt="node"/>
                
            </div>
            <div class="cont clr">
                <h2>Node and Express</h2>
                <p class="txt">
                    * To make backend for my SIH problem i amde use of the node js and Express js for creating the server of the pages  
                </p>
                
            </div>
        </div>
    </div>
    </div>)
}
export default Education;