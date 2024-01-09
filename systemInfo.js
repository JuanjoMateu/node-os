const getOSInfo = require('./osModule');
const getNetworkInfo = require('./networkModule');

const osInfo = getOSInfo();
const networkInfo = getNetworkInfo();

console.log('Información del Sistema Operativo:');
for (const [key, value] of Object.entries(osInfo)) {
  console.log(`${key}: ${value}`);
}

console.log('\nInformación de Red:');
for (const [interfaceName, details] of Object.entries(networkInfo)) {
  console.log(`Interfaz ${interfaceName}:`);
  details.forEach((detail) => {
    console.log(`  Familia: ${detail.Familia}`);
    console.log(`  Dirección: ${detail.Dirección}`);
    console.log(`  Interno: ${detail.Interno}`);
  });
  console.log('');
}
