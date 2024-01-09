const os = require('os');

function getOSInfo() {
  return {
    Nombre: os.hostname(),
    Tipo: os.type(),
    Version: os.version(),
    Arquitectura: os.arch(),
    CPUs: os.cpus().length,
    MemoriaTotal: (os.totalmem() / (1024 * 1024)).toFixed(2) + ' MB',
    MemoriaLibre: (os.freemem() / (1024 * 1024)).toFixed(2) + ' MB'
  };
}

module.exports = getOSInfo;
