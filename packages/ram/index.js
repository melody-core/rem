#!/usr/bin/env node
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
  async check() {
    console.log(chalk.blueBright('👩‍🎤拉姆为您效劳~'));
    const targetProSrcPath = process.cwd();
    if (!pathReg.test(targetProSrcPath)) {
      console.log(chalk.yellow('👩‍🎤拉姆拉姆提示您: 请在组件项目的src目录下运行ram命令~'));
      process.exit();
    }
    const inputres = await inquirer.prompt([
      {
        type: 'input',
        message: '请填写您要开发的组件名称',
        name: 'ComponentName',
        prefix: '👩‍🎤',
      },
    ]);
    if (!inputres.ComponentName || !nameReg.test(inputres.ComponentName)) {
      console.log(chalk.yellow('👩‍🎤拉姆拉姆提示您: 组件名必须是大驼峰语法的英文单词组合~'));
      process.exit();
    }
    const cuDirs =  await fs.promises.readdir(targetProSrcPath);
    if(cuDirs.indexOf(inputres.ComponentName) > -1){
      console.log(chalk.yellow('👩‍🎤拉姆拉姆提示您: 已经存在此组件目录，不允许覆盖哦~'));
      process.exit();
    }
    const spinit = ora('👩‍🎤拉姆拉姆工作中~');
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
      console.log(chalk.yellow('👩‍🎤拉姆拉姆提示您: 组件初始化失败了，您可能要在此命令前加sudo~'));
      spinit.stop();
      process.exit();
    }
    console.log(chalk.blueBright('👩‍🎤拉姆拉姆提示您: 组件初始化成功啦，请在此之上开发吧~'));
    spinit.stop();
  }
  start() {
    // 版本
    program.version(require('./package.json').version).option('-v, --version', '查看当前版本');

    // 注册命令i
    program
      .command('init')
      .description('初始化一个组件～')
      .action(async () => {
        // todosth
        await this.check();
      });

    // 解析环境参数，不要删除
    program.parse(process.argv);
  }
}

new Main().start();
