import _ from 'lodash';
import "./style.css"
import adultHead from "./assets/images/adult-head.png"
import printMe from "./print.js"
import noteConstructor from './noteConstructor';


 function component() {
   const element = document.createElement('div');

  const btn = document.createElement("button");
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   btn.innerHTML = "Click me";
   btn.onclick = printMe
   element.appendChild(btn);
   element.classList.add("hello")
  const adultHeadImg = new Image();
  adultHeadImg.src = adultHead

  element.appendChild(adultHeadImg)
 element.appendChild(noteConstructor())

   return element;
 }

 document.body.appendChild(component());
 