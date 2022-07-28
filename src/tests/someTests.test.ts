const sum = (a: number, b: number) => {
    return a+b
}

test('adds a to b', ()=>{
    expect(sum(1, 1)).toBe(2)
})

const obj1 = {
    name: 'dog'
}

const obj2 = {
    name: 'dog'
}

test('obj1 equals to obj2', ()=> {
    expect(obj1).toEqual(obj2)
})

test('obj1 == obj2 is true', () => {
    expect(obj1 == obj1).toBeTruthy()
})