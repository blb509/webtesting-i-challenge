module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item) {
    if (item.enhancment < 20) {
      item.enhancment = item.enhancment + 1;
    }
  }
  return { ...item };
}

function fail(item) {
  if (item) {
    if (item.enhancment < 15) {
      item.durability = item.durability - 5;
      return { ...item };
    }
    if (item.enhancment >= 15) {
      item.durability = item.durability - 10;
    }
    if (item.enhancment > 16) {
      item.enhancment = item.enhancment - 1;
      return { ...item };
    }
  }
  return { ...item };
}

function repair(item) {
  if (item.durability) {
    item.durability = 100;
  }
  return { ...item };
}

function get(item) {
  return { ...item };
}
