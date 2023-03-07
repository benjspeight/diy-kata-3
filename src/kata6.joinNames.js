const joinNames = (namesObj) => {
    const numNames = namesObj.length;
    if (numNames === 0) {
      return "";
    } else if (numNames === 1) {
      return namesObj[0].name;
    } else if (numNames === 2) {
      return `${namesObj[0].name} & ${namesObj[1].name}`;
    } else {
      const names = namesObj.map(obj => obj.name);
      const last = names.pop();
      return `${names.join(", ")} & ${last}`;
    }
  };

module.exports = joinNames;
