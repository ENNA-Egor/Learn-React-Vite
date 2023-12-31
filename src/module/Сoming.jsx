import React, {Component} from 'react'
import subjectObject from '../assets/asset.jsx'



class Coming extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        subjects: Object.keys(subjectObject),
        topics: [],
        chapters: []
      };
    }
  
  
    handleSubjectChange = (event) => {
      const selectedSubject = event.target.value;
      const selectedTopic = Object.keys(subjectObject[selectedSubject])[0]; // Default to the first topic
      const selectedChapter = subjectObject[selectedSubject][selectedTopic][0]; // Default to the first chapter
      this.setState({
        topics: Object.keys(subjectObject[selectedSubject]),
        chapters: subjectObject[selectedSubject][selectedTopic],
        selectedSubject,
        selectedTopic,
        selectedChapter
      });
    };
  
    handleTopicChange = (event) => {
      const selectedTopic = event.target.value;
      const selectedChapter = subjectObject[this.state.selectedSubject][selectedTopic][0]; // Default to the first chapter
      this.setState({
        chapters: subjectObject[this.state.selectedSubject][selectedTopic],
        selectedTopic,
        selectedChapter
      });
    };

    handleChapterChange = (event) => {
      this.setState({
        selectedChapter: event.target.value
      });
    };
  

  render(){
return (
  <div id="TabHome" className="tabcontent  visible">
    <h2>Приход</h2>
      <form name="form1" id="form1" action="">
        <div>
          <input type="date" className="btn btn-success m-2"/>
        </div>
        <legend className="text-primary fs-5" > Наименование: 
        <select name="subject" id="subject" className="btn btn-success m-2" value={this.state.selectedSubject} onChange={this.handleSubjectChange}>
          {this.state.subjects.map(subject => <option key={subject} value={subject}>{subject}</option>)}
        </select>
        <legend className="text-primary fs-5"> Размер:
        <select name="topic" id="topic" className="btn btn-success m-2" value={this.state.selectedTopic} onChange={this.handleTopicChange}>
          {this.state.topics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
        </select>
        </legend>
        <legend className="text-primary fs-5"> Рост:
        <select name="chapter" id="chapter" className="btn btn-success m-2" value={this.state.selectedChapter} onChange={this.handleChapterChange}>
          {this.state.chapters.map(chapter => <option key={chapter} value={chapter}>{chapter}</option>)}
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