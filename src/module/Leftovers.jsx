import React, { Component } from 'react'

class Leftovers extends Component {

  render(){

  
return (
  <div id="TabNews" className="tabcontent hide">
  <h2>Остатки</h2>
  <form name="form2" id="form2" action="">
        <div>
      <button type="button" className="btn btn-ost btn-success m-2">Остатки</button> 
    </div>
    <div>
        <select name="subject2" id="subject2" className="btn btn-success m-2">
          <option value="" selected="selected">Выберите наименование СИЗ</option>
        </select>
      </div>
      </form>
    </div>
    )
  }
}

export default Leftovers