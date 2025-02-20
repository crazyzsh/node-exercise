module.exports = {
  env: {
    // browser: true, // 允许在浏览器环境下使用 console
    node: true, // 允许在 Node.js 环境下使用 console，允许本文件可以使用esmudule模块化
    es2021: true, // 启用 ES2021 语法
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': ['warn'], // 警告未使用的变量
    'no-undef': 'error', // 禁止使用未声明的变量
    'prefer-const': 'warn', // 能用 `const` 的地方就不要用 `let`
    'no-var': 'error', // 禁止使用 var
    'no-multiple-empty-lines': ['error', { max: 1 }], // 限制连续空行数
    eqeqeq: ['warn', 'always'], // 要求使用 === 而不是 ==
  },
}
