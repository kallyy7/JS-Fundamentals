function oddNumbersFrom1ToN(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

oddNumbersFrom1ToN(5);