function sortCarByYearAscendingly(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Clone array untuk menghindari side-effect
    // Apa itu side effect?
    const result = [...cars];
    console.log("🚀 ~ sortCarByYearAscendingly ~ result:", result);

    // Tulis code-mu disini
    for (let i = 1; i < result.length; i++) {
        const current = result[i];
        let j = i - 1;
        while (j >= 0 && result[j].year > current.year) {
            result[j + 1] = result[j];
            j--;
        }
        result[j + 1] = current;
    }

    // Rubah code ini dengan array hasil sorting secara ascending
    return result;
}
