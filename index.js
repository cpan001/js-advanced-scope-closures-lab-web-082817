function produceDrivingRange(n) {
  return function (start, end) {
    let range = Math.abs(parseInt(end, 10) - parseInt(start,10));
    let range_rel = Math.abs(n - range)
    if (range <= n) {
      return `within range by ${range_rel}`;
    } else {
      return `${range_rel} blocks out of range`;
    }
  }
}

function produceTipCalculator(tip_percent) {
  return function (fare) {
    return fare * tip_percent
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
