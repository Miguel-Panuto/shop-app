const NumberFormater = (num) => {
    const numDec = num.toFixed(2);
    const numFormat = '$ ' + numDec.toString();
    return numFormat;
}

export default NumberFormater;