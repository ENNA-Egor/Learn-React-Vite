import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/css/min/Index.min.css'
import Tabset from'./module/Tabset'

function App() {
  
  function openPage(pageName, pageName1, elmnt, color) {


   }
  


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
