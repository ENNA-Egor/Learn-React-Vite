import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './App.css'
import Tabset from'./module/Tabset'

function App() {
  const [count, setCount] = useState(10)
  const [countEnd, setCountEnd] = useState(10)

  return (
    <>
    <h1 class="text-success d-flex justify-content-center mt-3">Выдача и учёт спецодежды.</h1>
    <div class="tablinks">
    <div class="divtablink">
      <button class="home  tablink"  onclick="openPage('.home', 'TabHome')" >Приход</button>
    </div>
    <div class="divtablink">
      <button class="tablink news" onclick="openPage('.news', 'TabNews')" >Остатки</button>
    </div>
      <div class="divtablink">
      <button class="tablink contact" onclick="openPage('.contact', 'TabContact')" id="defaultOpen">Выдать</button>
    </div>
      <div class="divtablink">
      <button class="tablink about" onclick="openPage('.about', 'TabAbout')">Личная карточка</button>
    </div>
  </div>
  <Tabset/>
    </>
  )
}

export default App
