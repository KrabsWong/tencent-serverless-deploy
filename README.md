# tencent-serverless-deploy

在仓库中新增目录 `.github/workflows/main.yml`

将当前仓库根目录下的 `main.yml` 文件复制过去。

github action 部分的配置就 OK 了

## 脚本内容

1. 克隆当前仓库代码
2. 设置当前构建所需要的 nodejs 版本
3. 安装依赖
4. 全局安装 `serverless` 的 cli 工具
5. 执行部署

## 必要配置

### 配置 tencent cloud key/secret

> 没有就自己创建一个

1. 秘钥管理：https://console.cloud.tencent.com/cam/capi
2. 取 `SecretId` 和 `SecretKey`
3. 去到需要设置自动部署的仓库里，Settings -> Secrets and variables -> Actions
4. 新增两个 Repository Secrets (字段名字不可以改)

字段 | 值
:----|:----
TENCENT_SECRET_ID | SecretId 的值
TENCENT_SECRET_KEY | SecretKey 的值
