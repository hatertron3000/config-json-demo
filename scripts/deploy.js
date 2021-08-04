const fs = require('fs')

const config = JSON.parse(fs.readFileSync('config.json'))

config.settings.mySetting = process.env.MY_SETTING

fs.writeFileSync('config.json', JSON.stringify(config, null, 2))