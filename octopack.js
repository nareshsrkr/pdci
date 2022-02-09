const pack = require('research.web.deploytools').pack;
const path = require('path');

pack({
  // this needs to match the outDir value in angular-cli.json
  deployFromDirectory: path.resolve('./dist'),
  packageOptions:{
    authors:'ICDP.UI',
    description:'ICDP.UI'
  }
});

