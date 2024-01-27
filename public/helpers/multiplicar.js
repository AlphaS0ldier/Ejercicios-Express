function multiplicar(base) {
    return new Promise((resolve) => {
        let resultados = [];
        for (let i = 1; i <= 10; i++) {
            let num = base * i;
            resultados.push([base, i, num]);
        }
        resolve(resultados);
    })
}

module.exports = {
    multiplicar
};