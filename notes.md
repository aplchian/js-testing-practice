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