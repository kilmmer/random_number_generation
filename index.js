function getRandomNumber() {
    const militime = new Date().getTime().toString();

    return +militime[militime.length - 1]

}

function getRandomByMath() {
    return Math.floor(Math.random() * 10);
}

function main() {
    console.time('getRandomNumber')
    const numberRandom = getRandomNumber()
    console.timeEnd('getRandomNumber')
    console.log(numberRandom)

    console.time('getRandomByMath')
    const numberRandomMath = getRandomByMath()
    console.timeEnd('getRandomByMath')
    console.log(numberRandomMath)
}

main()