
export class RequiredError extends Error {
  constructor (requiredField, actualValue) {
    super(`[validator error]: ${requiredField} is required but got ${actualValue}.`)
  }
}

