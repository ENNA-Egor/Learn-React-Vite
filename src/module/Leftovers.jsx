import React, { Component } from 'react'
import subjectObject from '../assets/asset.jsx'

class Leftovers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subjects2: Object.keys(subjectObject)
    };
  }

  render(){

return (
  <div id="TabNews" className="tabcontent hide">
    <h2>Остатки</h2>
      <form name="form2" id="form2" action="">
        <div>
          <div>
              <button type="button" className="btn btn-ost btn-success m-2">Остатки</button>
          </div>
          <span className="text-primary fs-5">Наименование: </span>
            <select name="subject2" id="subject2" className="btn btn-success m-2" value={this.state.selectedSubject} onChange={this.handleSubjectChange}>
              {this.state.subjects2.map(subject => <option key={subject} value={subject}>{subject}</option>)}
            </select>
        </div>
      </form>
  </div>
    )
  }
}

export default Leftovers