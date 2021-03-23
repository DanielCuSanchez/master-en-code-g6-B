function esPalindromo(string) {
    if (string.split(" ").join("") !== alreves(string.split(" ").join(""))) {
        return false
    }
    return true
}

function alreves(string) {
    let reves = ""
    for (let i = string.length; 0 < i; i--) {
        reves += string[i - 1]
    }
    console.log(reves)
    return reves
}

let siEs = "ana lava lana"
let noEs = "ana lava lanaee"

console.log(esPalindromo(siEs));
console.log(esPalindromo(noEs));