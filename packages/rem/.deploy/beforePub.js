
const fs = require('fs');
const path = require('path');


const targetPath = path.resolve(__dirname, './../public/index.html');

const zstr = fs.readFileSync(targetPath, 'utf-8');

const res = zstr.replace("Storybook", "RemUI");

fs.writeFileSync(targetPath, res, 'utf-8');