import test from 'ava'

import { RequiredError } from '../app/support/errors'

test('Do errors inherit?', t => {
  try {
    throw new RequiredError('myField', undefined)
  } catch (e) {
    console.log(e instanceof RequiredError)
    console.log(e instanceof Error)
    t.true(e instanceof RequiredError)
  }

  t.throws(_ => { throw new RequiredError() }, RequiredError)
})

