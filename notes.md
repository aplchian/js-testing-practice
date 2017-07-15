## Testing Notes

How do we prevent bugs?

1. Static Types: Flow / Typescript
2. Linting: ESLint
3. Testing: ??

What kind of testing can we do?
Lots~

#### Unit Test?
Tests a small bit of code. Does this small piece of functionality work?

#### Integration Test?
Testing many units together. Does the component integrate in the system

#### End to End Test?

Can a user accomplish an action?  Testing a whole flow in your application.  Focus on the flows that could cause problems. 


Where do you we focus our time?

Unit -> Integration -> E2E

Unit are cheaper and easier.


```
test('it works', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
})
```

for code coverage about 75% is good... with more you start getting dimenishing returns

```
"scripts": {
    "test": "jest --coverage"
  }
```

to see coverage report 
```
open coverage/lcov-report/index.html
```


```
  {
  "devDependencies": {
    "jest": "^20.0.4"
  },
  "scripts": {
    "test": "jest --coverage",
    "test:watch": "jest --watch"
  },
  "jest":{
    "testEnvironment": "jest-environment-node",
    "collectCoverageFrom": [
      "*.js"
    ],
    "coverageThreshold": {
      "global": {
        "statements": 50,
        "branches": 50,
        "functions": 50,
        "lines": 100
      }
    }
  }
}
```

```
test.skip() // skips this test
test.only() // only runs this test
```

`npm run test:watch`


`yarn add --dev babel-core babel-preset-env`

use this^


When writing a test, instead of focusing on code coverage, you want to 
be thinking about use cases you want to cover

you should try to use variables in tests


### Object Mother Pattern

```
test('returns null if the sandwich does not exist', () => {
    const req  = getReq()
    const result = makeMeASandwich(req)
    expect(result).toBeNull()
})

function getReq(sandwitch){
    return {query: {sandwitch}}
}

```

make this constructor function that makes a result
this makes it easy to reason about the tests.

### Assertsion
https://facebook.github.io/jest/docs/expect.html#content
.toMatchObJect
.toEqual - deep equality



### Test Driven Development

First you write the test, then you implement it, then you refactor

So, you write out all the test you want to pass, then go through each and get that to pass, untill all pass


**Tradeoffs with TDD**

TDD doesnt work very well if you don't know what the API will look like.  How do you get the benefits if you dont know what the api will look like?.. Write the code and get the api how you want it, and then start over and write it again with TDD.

TDD is good for utility functions like this.. but not so great for the DOM.



## fixing bugs



expect({name: 'alex', age: 25}).toMatchObect({age: 25}) ==> looks to deep equal the second object.. so if the first has more values that the second, that is ok


```
test('toProfileJSONFor returns the correct object', () => {
  const userOverrides = {
    image: 'http://example.com/avatar.png',
    username: 'bob',
    bio: 'I once shook obamas hand'
  }
  const user = generateUser(userOverrides)
  const generatedUser = user.toProfileJSONFor()
  expect(generatedUser).toMatchObject(userOverrides)

})
```

## integration testing

higher level than unit test

for an api, you would run the whole server .. 

```
import startServer from '../start-server'
import axios from 'axios'

let server

beforeAll(() => {
  return startServer().then(s => {
    server = s
  })
})

afterAll(done => {
  server.close(done)
})


test('can get users', () => {
  return axios.get('http://localhost:3001/api/users').then(res => {
    const user = res.data.users[0]
    console.log('user',user)
    expect(user).toMatchObject({
        name: expect.any(String),
        username: expect.any(String),
        
    })
  })
})

instead of using try catch block you can do a 
const result = await iWantToReturnAPromise().catch(err => err)

```

you want to avoid tests being couple to each other.. like the first test posts a user, and the second dest updates it.. so the second would fail if the first didnt happen.


try {
  const result = await iWantToReturnAPromise()
}catch(e){

}
