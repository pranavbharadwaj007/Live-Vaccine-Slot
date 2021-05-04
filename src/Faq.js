
  
import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import "./faq.css";
function Faq() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>FAQ about vaccine </h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Faq;