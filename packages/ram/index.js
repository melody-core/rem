#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const fs = require('fs');
const { Command } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');

const codeConfig = require('./config');

const pathReg = /\/packages\/rem\/src$/;
const nameReg = /^[A-Z][a-zA-z]+$/;
const ComponentReg = /{{ComponentName}}/g;

const program = new Command();

class Main {
  async check(noVid) {
    console.log(chalk.blueBright('ð©âð¤ æå§ä¸ºæ¨æå³(*â»-â»*)'));
    const targetProSrcPath = process.cwd();
    if (!pathReg.test(targetProSrcPath) && !noVid) {
      console.log(chalk.yellow('ð©âð¤ æå§æå§æç¤ºæ¨: è¯·å¨ç»ä»¶é¡¹ç®çsrcç®å½ä¸è¿è¡ramå½ä»¤ï¼å¦ææ¨æ¯windowsç¯å¢ï¼è¯·å¨æ­¤å½ä»¤åæ·»å åæ° --com'));
      process.exit();
    }
    const inputres = await inquirer.prompt([
      {
        type: 'input',
        message: 'è¯·å¡«åæ¨è¦å¼åçç»ä»¶åç§°',
        name: 'ComponentName',
        prefix: 'ð©âð¤',
      },
    ]);
    if (!inputres.ComponentName || !nameReg.test(inputres.ComponentName)) {
      console.log(chalk.yellow('ð©âð¤ æå§æå§æç¤ºæ¨: ç»ä»¶åå¿é¡»æ¯å¤§é©¼å³°è¯­æ³çè±æåè¯ç»åï¼'));
      process.exit();
    }
    const cuDirs =  await fs.promises.readdir(targetProSrcPath);
    if(cuDirs.indexOf(inputres.ComponentName) > -1){
      console.log(chalk.yellow('ð©âð¤ æå§æå§æç¤ºæ¨: å·²ç»å­å¨æ­¤ç»ä»¶ç®å½ï¼ä¸åè®¸è¦çï¼'));
      process.exit();
    }
    const spinit = ora('ð©âð¤ æå§æå§å·¥ä½ä¸­~');
    console.log('\n');
    spinit.start();
    try {
      const compomnentDirPath = path.resolve(targetProSrcPath, `./${inputres.ComponentName}`);
      await fs.promises.mkdir(compomnentDirPath);
      await codeConfig.forEach(async (codeItem) => {
        const cufilePath = path.resolve(
          compomnentDirPath,
          codeItem.path.replace(ComponentReg, inputres.ComponentName),
        );
        await fs.promises.writeFile(
          cufilePath,
          codeItem.code.replace(ComponentReg, inputres.ComponentName),
          'utf-8',
        );
      });
    } catch (error) {
      console.error(error);
      console.log(chalk.yellow('ð©âð¤ æå§æå§æç¤ºæ¨: ç»ä»¶åå§åå¤±è´¥äºï¼æ¨å¯è½è¦å¨æ­¤å½ä»¤åå sudo~'));
      spinit.stop();
      process.exit();
    }
    spinit.stop();
    console.log(chalk.blueBright('ð©âð¤ æå§æå§æç¤ºæ¨: ç»ä»¶åå§åæåå¦ï¼è¯·å¨æ­¤ä¹ä¸å¼åå§~'));
  }
  start() {
    // çæ¬
    program.version(require('./package.json').version).option('-v, --version', 'æ¥çå½åçæ¬');

    // æ³¨åå½ä»¤i
    program
      .command('init')
      .alias('i')
      .option('-c, --com', 'ä¸è¿è¡ç®å½éªè¯')
      .description('åå§åä¸ä¸ªç»ä»¶,å --comä¸éªè¯ç®å½')
      .action(async (options) => {
        // todosth
        console.log(options)
        await this.check(options && options.com);
      });

    // è§£æç¯å¢åæ°ï¼ä¸è¦å é¤
    program.parse(process.argv);
  }
}

new Main().start();
