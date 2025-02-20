## babel 简单实用

### overview

1、下载依赖进行测试使用

```bash
pnpm add --save-dev @babel/core @babel/cli @babel/preset-env
```

2、配置 babel.config.js

> Creating a config file named babel.config.json (requires v7.8.0 and above) in the root of your project with this content:

```js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```

> Or babel.config.js if you are using an older Babel version

```js
const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
      corejs: '3.6.4',
    },
  ],
];

module.exports = { presets };
```

3、使用 babel 命令进行编译

```bash
./node_modules/.bin/babel src --out-dir lib
```

> You can use the npm package runner that comes with npm@5.2.0 to shorten that command by replacing ./node_modules/.bin/babel with npx babel

```bash
npx babel src --out-dir lib
```

### babel-loader

```bash
pnpm add --save-dev babel-loader
```

## 项目最佳实践

例如 Array.findLastIndex，该方法在 safari 15.4 版本才开始支持，此时需配置 babel 配置文件如下

```bash
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": "3.40.0",
        // "targets": ["> 0.25%", "not dead"]
        // "targets": ["> 0.2%"]
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "15.8.1"
        }
      }
    ]
  ]
}

```

以下过于宽松，不会生效

```bash
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": "3.40.0",
        "targets": ["> 0.25%", "not dead"]
        // "targets": ["> 0.2%"]
        // "targets": {
        //   "edge": "17",
        //   "firefox": "60",
        //   "chrome": "67",
        //   "safari": "15.8.1"
        // }
      }
    ]
  ]
}
```

尽量更新 core-js 版本，避免使用过旧的版本
