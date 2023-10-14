import React from 'react'

function Leftovers (){
return (
  <>
  <div id="TabNews" class="tabcontent ">
  <h2>Остатки</h2>
  <form name="form2" id="form2" action="">
        <div>
      <button type="button" class="btn btn-ost btn-success m-2">Остатки</button> 
    </div>
    <div>
        <select name="subject2" id="subject2" class="btn btn-success m-2">
          <option value="" selected="selected">Выберите наименование СИЗ</option>
        </select>
      </div>
      </form>
    </div>
  </> 
 )
}

export default Leftovers