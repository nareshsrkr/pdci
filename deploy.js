const deploy = require('research.web.deploytools').deploy;
const path = require('path');

deploy({
        // this needs to match the outDir value in angular-cli.json and needs prefixed as a local file path when using require
        deployFromDirectory: path.resolve('./dist'),
        packageFile: path.resolve('package.json'),
        host: 'your octopus host',
        apiKey: 'API-your-key',
});