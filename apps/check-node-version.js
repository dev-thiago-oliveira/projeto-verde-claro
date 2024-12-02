const semver = require('semver');
const requiredVersion = '18.0.0';
const currentVersion = process.version;

if (!semver.gte(currentVersion, requiredVersion)) {
    console.error(`

    ============================================================

    Bem vindo ao \u001b[1mVerde claro\u001b[0m. 😊

        ⚠️- Para seguir com a instalação, é necessário utilizar a versão \u001b[32m${requiredVersion}\u001b[0m do Node.js.
        🚨- A versão utilizada hoje é a \u001b[31m${currentVersion}\u001b[0m.

    Atualize o Node.js para continuar.
    Site oficial: https://nodejs.org/

    ============================================================

    `);
    process.exit(1);
}

console.log(`Versão do Node.js (${requiredVersion}) compatível.`);

