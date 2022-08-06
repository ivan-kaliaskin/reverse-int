module.exports = function reverse(n) {
    let nModule = n < 0 ? n * (-1) : n
    const sNumberAsString = '' + nModule
    const sNumberAsReversedString = sNumberAsString.split('').reverse().join('')
    return +sNumberAsReversedString
}