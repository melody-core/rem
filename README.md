# Rem
> Rem的含义? “如果爱情有颜色，那一定是蓝色！”——致敬雷姆党！

## 开发
```shell
# port 6006
npm run storybook 
```

```shell
npm run start
```

## 其他命令
```shell
    "build": "rollup -c",
    "start": "rollup -c -w",
    "prepare": "yarn run build",
    "lint": "eslint .",
    "test": "jest .",
    "test:watch": "jest --watch",
    "storybook": "start-storybook -p 6006 --ci",
    "build:storybook": "build-storybook -o public/"
```