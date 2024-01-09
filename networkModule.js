const os = require('os');

function getNetworkInfo() {
  const networkInterfaces = os.networkInterfaces();
  const result = {};

  for (const [interfaceName, details] of Object.entries(networkInterfaces)) {
    result[interfaceName] = [];

    for (const detail of details) {
      result[interfaceName].push({
        Familia: detail.family,
        Dirección: detail.address,
        Interno: detail.internal
      });
    }
  }

  return result;
}

module.exports = getNetworkInfo;
