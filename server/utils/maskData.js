function maskData(userData) {
  const maskName = (rawName) =>
    rawName
      .substring(0, 2)
      .concat("*** ***")
      .concat(rawName.substring(rawName.length - 2));

  const maskEmail = (rawEmail) =>
    rawEmail.substring(0, 2).concat("********@***.***");

  return userData.map((x) => {
    return {
      ...x,
      name: maskName(x.name),
      email: maskEmail(x.email),
    };
  });
}

module.exports = maskData;
