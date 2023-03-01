import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteItem }) {
  const renderedQuestions = questions.map((question) => (
    <QuestionItem
      key={question.id}
      question={question}
      onDeleteItem={onDeleteItem}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      {renderedQuestions.length > 0 ? (
        <ul>{renderedQuestions}</ul>
      ) : (
        <p>No questions found.</p>
      )}
    </section>
  );
}

export default QuestionList;
