// p4-server.js

const fastify = require('fastify')();

const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer
} = require('./p4-module');

fastify.get('/cit/question', (request, reply) => {
  const questions = getQuestions();
  reply.send({
    error: '',
    statusCode: 200,
    questions: questions
  });
});

fastify.get('/cit/answer', (request, reply) => {
  const answers = getAnswers();
  reply.send({
    error: '',
    statusCode: 200,
    answers: answers
  });
});

fastify.get('/cit/questionanswer', (request, reply) => {
  const questionAnswers = getQuestionsAnswers();
  reply.send({
    error: '',
    statusCode: 200,
    questions_answers: questionAnswers
  });
});

fastify.get('/cit/question/:number', (request, reply) => {
  const number = parseInt(request.params.number);
  const question = getQuestion(number);
  
  if (question.error) {
    reply.code(404).send({
      error: question.error,
      statusCode: 404
    });
  } else {
    reply.send({
      error: '',
      statusCode: 200,
      question: question.question,
      number: question.number
    });
  }
});

fastify.get('/cit/answer/:number', (request, reply) => {
  const number = parseInt(request.params.number);
  const answer = getAnswer(number);
  
  if (answer.error) {
    reply.code(404).send({
      error: answer.error,
      statusCode: 404
    });
  } else {
    reply.send({
      error: '',
      statusCode: 200,
      answer: answer.answer,
      number: answer.number
    });
  }
});

fastify.get('/cit/questionanswer/:number', (request, reply) => {
  const number = parseInt(request.params.number);
  const questionAnswer = getQuestionAnswer(number);
  
  if (questionAnswer.error) {
    reply.code(404).send({
      error: questionAnswer.error,
      statusCode: 404
    });
  } else {
    reply.send({
      error: '',
      statusCode: 200,
      question: questionAnswer.question,
      answer: questionAnswer.answer,
      number: questionAnswer.number
    });
  }
});

fastify.get('*', (request, reply) => {
  reply.code(404).send({
    error: 'Route not found',
    statusCode: 404
  });
});

const start = async () => {
  try {
    await fastify.listen(8080);
    console.log('Server started on port 8080');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();