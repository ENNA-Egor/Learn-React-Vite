import React from 'react'

function Coming (){
return (
    <>
  <div id="TabHome" class="tabcontent active">
  <h2>Hello Coming</h2>
      <form name="form1" id="form1" action="">
        <div>
          <input type="date" class="btn btn-success m-2"/>
        </div>
        <legend class="text-primary" > Наименование: 
        <select name="subject" id="subject" class="btn btn-success m-2">
          <option value="" selected="selected">Выберите наименование СИЗ</option>
        </select>
        <legend class="text-primary"> Размер:
         <select name="topic" id="topic" class="btn btn-success m-2" >
          <option value="" selected="selected">Выберите размер</option>
        </select>
      </legend>
        <legend class="text-primary"> Рост:
          <select name="chapter" id="chapter" class="btn btn-success m-2">
            <option value="" selected="selected">Выберите рост</option>
          </select>
        </legend>
        </legend>
        <legend class="text-primary">Количество
          <input type="number" class="btn btn-success m-2"/>
        </legend>
        <legend class="text-primary">Стоимость
          <input type="number" class="btn btn-success m-2"/>
        </legend>
        <input type="submit" class="btn btn-success m-2"value="Записать"/>
      </form>
    </div>    
    </>
 )
}

export default Coming