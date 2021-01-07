function findAllPermutations(string) {

    let permutationsArray = [];

    if (string.length < 2) {
        return string
    } else {

        for (let i = 0; i < string.length; i++) {
            let char = string[i];
            let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

            for (let permutation of findAllPermutations(remainingChars)) {
                permutationsArray.push(char + permutation)
            }
        }
    }

    return permutationsArray;

}