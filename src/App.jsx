import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/css/min/Index.min.css'
import Tabset from'./module/Tabset'

function App() {
  
  function openPage(event) {
    let evValue = (event.target.className).slice(0,7);
    if (evValue =='tablink') {
      let dataTab = event.target.getAttribute('data-tab');
      let tabH = document.getElementsByClassName('tablink');
      for (let i = 0; i < tabH.length; i++) {
        tabH[i].classList.remove('active');
      }
      event.target.classList.add('active');
      var tabBody = document.getElementsByClassName('tabcontent');
      for (var i = 0; i < tabBody.length; i++) {
        if (dataTab == i) {
          tabBody[i].classList.remove('hide');
          tabBody[i].classList.add('visible');
        } else {
          tabBody[i].classList.remove('visible');
          tabBody[i].classList.add('hide');
        }
      }
    }

   }
  


  return (
    <>
    <h1 className="text-success d-flex justify-content-center mt-3 fs-3">Выдача и учёт спецодежды.</h1>
    <div className="tablinks">
    <div className="divtablink">
      <button onClick={openPage} className="tablink home active"  data-tab ="0">Приход</button>
    </div>
    <div className="divtablink">
      <button onClick={openPage} className="tablink news" data-tab ="1">Остатки</button>
    </div>
      <div className="divtablink">
      <button onClick={openPage} className="tablink contact"  data-tab ="2">Выдать</button>
    </div>
      <div className="divtablink">
      <button onClick={openPage} className="tablink about" data-tab ="3" >Личная карточка</button>
    </div>
  </div>
  <Tabset/>
    </>
  )
}

export default App
