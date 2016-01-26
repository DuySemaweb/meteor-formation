Template.answers.helpers({
  answers: () => Quiz.findOne().answers
})

Template.answers.events({
  'click input': (evt) => {
    const quiz = Quiz.findOne()
    const userAnswer = evt.target.value
    if (quiz.answers[quiz.answer] === userAnswer)
      Notifications.success('Bonne réponse', `c'est bien ${userAnswer}`)
    else
      Notifications.warn('Mauvaise réponse', 'You loose!')
  }
})
