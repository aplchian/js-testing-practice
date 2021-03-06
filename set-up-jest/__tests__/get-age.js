import getAge from '../get-age'

test ('returns null if the person has no age', () =>{
    const person = {}
    const result = getAge(person)
    expect(result).toBe(null)
})

test ('can get a persons age', () =>{
    const age = 23
    const person = {age}
    const result = getAge(person)
    expect(result).toBe(age)
})

test('returns 0 if the persons age is 0', () => {
    const age = 0
    const person = {age}
    const result = getAge(person)
    expect(result).toBe(age)
})