function telephoneCheck(str) {
    const regex = /^1?\s?((\([1-9]\d{2}\))|((?<!\()[1-9]\d{2}(?!\))))-?\s?\d{3}-?\s?\d{4}$/;
    return regex.test(str);
}
  