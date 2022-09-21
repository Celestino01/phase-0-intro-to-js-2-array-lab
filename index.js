// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const copyCat = [...cats]
    copyCat.push(name)
    return copyCat
}

function prependCat(name){
    const copyCat = [...cats]
    copyCat.unshift(name)
    return copyCat
}

function removeLastCat(){
    const copyCat = [...cats]
    copyCat.pop()
    return copyCat
}

function removeFirstCat(){
    const copyCat = [...cats]
    copyCat.shift()
    return copyCat
}
