import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/css/min/Index.min.css'
import Tabset from'./module/Tabset'

function App() {
  const [count, setCount] = useState(10)
  const [countEnd, setCountEnd] = useState(10)

  // function openPage(pageName, pageName1, elmnt, color) {

    // alert (pageName);
    // alert (pageName1);
   function openPage(event) {
    // // Hide all elements with class="tabcontent" by default */
     alert ('Ok');
     alert (event.target);
     console.log (event.target);
     console.log (event.target.className);
    // console.log(event.target.className);
    if (event.target.className === 'home'){
      console.log ('Ok home');
    } else {
      console.log('No');
    }
    // var i, tabcontent, tablinks;
    // tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //   tabcontent[i].style.display = "none";
     }

  
    // // // Show the specific tab content
    // document.getElementById(pageName1).style.display = "block";
  
    // // // Add the specific color to the button used to open the tab content
    // let elem = document.querySelector(pageName);
    // let elemAll = document.querySelectorAll('.tablink');
    // for(i=0; i< elemAll.length; i++){
    //   elemAll[i].classList.remove('active');
    // }
    // elem.classList.add('active');
  // }
  
  // Get the element with id="defaultOpen" and click on it
  // document.getElementById("defaultOpen").click();


  return (
    <>
    <h1 class="text-success d-flex justify-content-center mt-3">Выдача и учёт спецодежды.</h1>
    <div class="tablinks">
    <div class="divtablink">
      <button onClick={openPage} class="home tablink"  onclick="openPage('.home', 'TabHome')" >Приход</button>
    </div>
    <div class="divtablink">
      <button onClick={openPage} class="news tablink" onclick="openPage('.news', 'TabNews')" >Остатки</button>
    </div>
      <div class="divtablink">
      <button onClick={openPage} class="contact tablink" onclick="openPage('.contact', 'TabContact')" id="defaultOpen">Выдать</button>
    </div>
      <div class="divtablink">
      <button onClick={openPage} class="about tablink" onclick="openPage('.about', 'TabAbout')">Личная карточка</button>
    </div>
  </div>
  <Tabset/>
    </>
  )
}

export default App
