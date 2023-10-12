import { useState } from 'react'
// import TabS from './module/Tabset'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const [countEnd, setCountEnd] = useState(10)

  return (
    <>
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
  {/* <TabS/> */}
    </>
  )
}

export default App
