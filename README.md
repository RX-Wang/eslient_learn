### 一、eslint 在 package.json 文件中：
```
{
    "name": "mypackage",
    "version": "0.0.1",
    "eslintConfig": {
        "plugins": ["example"],
        "env": {
            "browser": true,
            "node": true,
            "example/custom": true
        }
    }
}
```
### 二、eslint 在 YAML 文件中：

```
---
  plugins:
    - example
  env:
    browser: true
    node: true
    example/custom: true
```