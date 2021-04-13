const paises = ["Mexico", "Panama", "Guatemala", "Salvador", "Brasil"]

const longestCountry = (array) => {

    let longestCountry = array[0].length
    let country = array[0]

    for (let i = 0; i < array.length; i++) {

        if (array[i].length > longestCountry) {
            longestCountry = array[i].length
            country = array[i]
        }

    }

    return country
}

console.log(longestCountry(paises))