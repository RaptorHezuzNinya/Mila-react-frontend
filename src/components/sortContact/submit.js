import {SubmissionError} from 'redux-form'

const submit = (values) => {
  console.log(values)
  if ([''].includes(values.firstName)) {
    throw new SubmissionError({
      firstName: 'User does not exist',
      _error: 'Login failed!'
    })
  } else {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
  }
}

export default submit
