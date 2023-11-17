import React from 'react'

function Coming (){
return (
    <>
  <div id="TabHome" className="tabcontent">
  <h2>Hello Coming</h2>
      <form name="form1" id="form1" action="">
        <div>
          <input type="date" className="btn btn-success m-2"/>
        </div>
        <legend className="text-primary" > Наименование: 
        <select name="subject" id="subject" className="btn btn-success m-2">
          <option value="" selected="selected">Выберите наименование СИЗ</option>
        </select>
        <legend className="text-primary"> Размер:
         <select name="topic" id="topic" className="btn btn-success m-2" >
          <option value="" selected="selected">Выберите размер</option>
        </select>
      </legend>
        <legend className="text-primary"> Рост:
          <select name="chapter" id="chapter" className="btn btn-success m-2">
            <option value="" selected="selected">Выберите рост</option>
          </select>
        </legend>
        </legend>
        <legend className="text-primary">Количество
          <input type="number" className="btn btn-success m-2"/>
        </legend>
        <legend className="text-primary">Стоимость
          <input type="number" className="btn btn-success m-2"/>
        </legend>
        <input type="submit" className="btn btn-success m-2"value="Записать"/>
      </form>
    </div>    
    </>
 )
}

export default Coming