import React, {Component} from 'react'

const subjectObject = {
  "": {
    "": [""],
  },
  "Летний костюм": {
    "44-46": ["170-176", "182-188"],
    "48-50": ["170-176", "182-188"],
    "52-54": ["170-176", "182-188"],
    "56-58": ["170-176", "182-188"],
    "60-62": ["170-176", "182-188"]
  },
  "Зимний костюм": {
    "44-46": ["170-176", "182-188"],
    "48-50": ["170-176", "182-188"],
    "52-54": ["170-176", "182-188"],
    "56-58": ["170-176", "182-188"],
    "60-62": ["170-176", "182-188"]
  },
  "Плащ": {
    "56-58": ["170-176", "182-188"],
    "60-62": ["170-176", "182-188"]
  },
  "Обувь летняя": {
    "39":["-"],
    "40":["-"],
    "41":["-"],
    "42":["-"],
    "43":["-"],
    "44":["-"],
    "45":["-"],
  },
  "Обувь зимняя": {
    "39":["-"],
    "40":["-"],
    "41":["-"],
    "42":["-"],
    "43":["-"],
    "44":["-"],
    "45":["-"],
  },
}



class Coming extends Component {
  
  constructor (props){
    super(props);
    this.state ={
      subject: '',
      topic: '',
      chapter: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  
  render(){
    
    const arrSubject = Object.keys(subjectObject)
    const arrSubSubject = Object.keys(subjectObject[this.state.subject])
    const arrSubSubSubject = Object.keys(subjectObject['Летний костюм']['44-46'][0])
    // console.log(arrSubSubject);
    console.log(arrSubSubSubject);
    



return (
  <div id="TabHome" className="tabcontent  visible">
    <h2>Приход</h2>
      <form name="form1" id="form1" action="">
        <div>
          <input type="date" className="btn btn-success m-2"/>
        </div>
        <legend className="text-primary fs-5" > Наименование: 
        <select value={this.state.subject} onChange={this.handleChange} name="subject" id="subject" className="btn btn-success m-2">
          {/* <option value="" disabled selected></option> */}
       { arrSubject.map((el)=> 
      <option key={el} value={el}> {el} </option>
      ) }
        </select>
        <legend className="text-primary fs-5"> Размер:
         <select value={this.state.topic} onChange={this.handleChange} name="topic" id="topic" className="btn btn-success m-2" >
         <option value="" ></option> 
         { arrSubSubject.map((el)=> 
      <option key={el} value={el}> {el} </option>
      ) }
    
        </select>
      </legend>
        <legend className="text-primary fs-5"> Рост:
          <select name="chapter" id="chapter" className="btn btn-success m-2">
          <option value="" ></option>
          {/* { arrSubSubSubject.map((el)=> 
      <option key={el} value={el}> {el} </option>
      ) } */}
          </select>
        </legend>
        </legend>
        <legend className="text-primary fs-5">Количество
          <input type="number" className="btn btn-success m-2"/>
        </legend>
        <legend className="text-primary fs-5">Стоимость
          <input type="number" className="btn btn-success m-2"/>
        </legend>
        <input type="submit" className="btn btn-success m-2"value="Записать"/>
      </form>
    </div> 
     ) 
    } 
  }



export default Coming