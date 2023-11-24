import React, {Component} from 'react'

const subjectObject = {
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
  }
}
// let subjectObject = {
//   "Летний костюм": 25,
//   "Зимний костюм": 31,
//   "Плащ": 44
// }


class Coming extends Component {

  render(){
    for (const property in subjectObject){
      console.log(`${property}:${subjectObject[property]}`)
    }
    console.log(Object.keys(subjectObject));
    const arrSubject = Object.keys(subjectObject)
    console.log(arrSubject);

    // function subjectOptions (){
    //   const subOptions = arrSubject.map((el)=> 
    //   <option key={arrSubject} value={arrSubject}> {arrSubject} </option>
    //   )
    // }


return (
  <div id="TabHome" className="tabcontent  visible">
    <h2>Приход</h2>
      <form name="form1" id="form1" action="">
        <div>
          <input type="date" className="btn btn-success m-2"/>
        </div>
        <legend className="text-primary fs-5" > Наименование: 
        <select name="subject" id="subject" className="btn btn-success m-2">
       { arrSubject.map((el)=> 
      <option key={el} value={el}> {el} </option>
      ) }
        </select>
        <legend className="text-primary fs-5"> Размер:
         <select name="topic" id="topic" className="btn btn-success m-2" >
          <option  >Выберите размер</option>
        </select>
      </legend>
        <legend className="text-primary fs-5"> Рост:
          <select name="chapter" id="chapter" className="btn btn-success m-2">
            <option >Выберите рост</option>
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