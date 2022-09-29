const test = require('tape')
const index = require('./index')

test('Teste 1', (t) => {
    t.assert(index.dolarParaReais(1000) === 5380,
    "Cotação correta")
    t.end()
})


test('Teste 2', (t) => {
    t.assert(index.dolarParaReais(4000) === 21520,
    "Cotação correta")
    t.end()
})

test('Teste 3', (t) => {
    t.assert(index.dolarParaReais(8000) === 40000,
    "Cotação errada")
    t.end()
})

test('Teste 4', (t) => {
    t.assert(index.fahrenheit(25) === 77,
    "fahrenheit correto")
    t.end()
})

test('Teste 5', (t) => {
    t.assert(index.fahrenheit(40) === 100,
    "fahrenheit errado")
    t.end()
})

test('Teste 6', (t) => {
    t.assert(index.fahrenheit(40) === 104,
    "fahrenheit correto")
    t.end()
})

test('Teste 7', (t) => {
    t.assert(index.nummaior(8,5,6) === "Número um é o maior",
    "numero maior está correto")
    t.end()
})

test('Teste 8', (t) => {
    t.assert(index.nummaior(70,26,150) === "Número três é o maior",
    "numero maior está correto")
    t.end()
})

test('Teste 9', (t) => {
    t.assert(index.nummaior(10,20,5) === "Número três é o maior",
    "numero maior está errado")
    t.end()
})