const { data } = require('./p4-data');

function getQuestions() {
  return data.map((item) => item.question);
}

function getAnswers() {
  return data.map((item) => item.answer);
}

function getQuestionsAnswers() {
  return JSON.parse(JSON.stringify(data));
}

function getQuestion(number = "") {
  if (typeof number !== "number" || !Number.isInteger(number))
    return { question: "", number: "", error: "Question number must be an integer" };

  if (number < 1)
    return { question: "", number: "", error: "Question number must be >= 1" };

  const questionObj = data[number - 1];

  if (!questionObj)
    return {
      question: "",
      number: "",
      error: `Question number must be less than the number of questions (${data.length})`,
    };

  return { question: questionObj.question, number, error: "" };
}

function getAnswer(number = "") {
  if (typeof number !== "number" || !Number.isInteger(number))
    return { answer: "", number: "", error: "Answer number must be an integer" };

  if (number < 1)
    return { answer: "", number: "", error: "Answer number must be >= 1" };

  const answerObj = data[number - 1];

  if (!answerObj)
    return {
      answer: "",
      number: "",
      error: `Answer number must be less than the number of questions (${data.length})`,
    };

  return { answer: answerObj.answer, number, error: "" };
}

function getQuestionAnswer(number = "") {
  if (typeof number !== "number" || !Number.isInteger(number))
    return { question: "", answer: "", number: "", error: "Question number must be an integer" };

  if (number < 1)
    return { question: "", answer: "", number: "", error: "Question number must be >= 1" };

  const qaObj = data[number - 1];

  if (!qaObj)
    return {
      question: "",
      answer: "",
      number: "",
      error: `Question number must be less than the number of questions (${data.length})`,
    };

  return { question: qaObj.question, answer: qaObj.answer, number, error: "" };
}

function addQuestionAnswer(question, answer) {
  if (typeof question !== "string" || typeof answer !== "string") {
    return { error: "Question and answer must be strings" };
  }

  const qaObj = { question, answer };
  data.push(qaObj);

  return { message: "Question and answer added successfully" };
}

function updateQuestionAnswer(number, question, answer) {
  if (typeof number !== "number" || !Number.isInteger(number)) {
    return { error: "Question number must be an integer" };
  }

  if (number < 1 || number > data.length) {
    return { error: "Invalid question number" };
  }

  if (typeof question !== "string" || typeof answer !== "string") {
    return { error: "Question and answer must be strings" };
  }

  const qaObj = data[number - 1];
  qaObj.question = question;
  qaObj.answer = answer;

  return { message: "Question and answer updated successfully" };
}

function deleteQuestionAnswer(number) {
  if (typeof number !== "number" || !Number.isInteger(number)) {
    return { error: "Question number must be an integer" };
  }

  if (number < 1 || number > data.length) {
    return { error: "Invalid question number" };
  }

  data.splice(number - 1, 1);

  return { message: "Question and answer deleted successfully" };
}


// Export all the functions
module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  addQuestionAnswer,
  updateQuestionAnswer,
  deleteQuestionAnswer,
};

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false;      // Extra credit
const testUpdate = false;   // Extra credit
const testDelete = false;   // Extra credit
  
  