
const fs = require('fs');
const path = require('path');

const reg = /Storybook/g;

const targetPath = path.resolve(__dirname, './../public/index.html');
const zstr = fs.readFileSync(targetPath, 'utf-8');
const res = zstr.replace("Storybook", "RemUI");
fs.writeFileSync(targetPath, res, 'utf-8');

const targetPathIframe = path.resolve(__dirname, './../public/iframe.html');
const zstrFrame = fs.readFileSync(targetPathIframe, 'utf-8');
const zstrFrameRes = zstrFrame.replace(reg, "RemUI");
fs.writeFileSync(targetPathIframe, zstrFrameRes, 'utf-8');