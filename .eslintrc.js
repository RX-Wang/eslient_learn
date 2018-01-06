module.exports = {
    // 指定你想启用的环境
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        // 针对某一插件中使用一种环境，确保该插件在 plugins中存在。
        "example/custom": true
        /*
        // 在package.json中配置： 
        "eslintConfig": {
            "plugins": ["example"],
            "env": {
                "browser": true,
                "node": true,
                "example/custom": true
            }
        }
        // 在YAML文件中配置：
        ---
        env:
          browser: true
          node: true */
    },
    "extends": "eslint:recommended",
    // 设置解析器选项
    "parserOptions": {
        // 指定 ECMAScript 版本,默认为 5，可以指定为 2015（同 6），2016（同 7），或 2017（同 8）使用年份命名
        "ecmaVersion": 6,
        // 额外的语言特性
        "ecmaFeatures": {
            //  允许在全局作用域下使用 return 语句
            // "globalReturn": true,
            // 启动全局严格模式
            // "impliedStrict": false,
            // 启用对实验性的 object rest/spread properties 的支持
            "experimentalObjectRestSpread": true,
            // 启动 JSX 语法校验
            "jsx": true
        },
        // 设置模块化引用  script(默认)或 module
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "example"
    ],
    "rules": {
        "indent": [
            "error",
            "space"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};