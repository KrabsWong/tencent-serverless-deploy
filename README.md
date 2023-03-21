# 使用 Github Action 自动部署 Tencent Serverless 项目

在仓库中新增目录 `.github/workflows/main.yml`

将当前仓库根目录下的 `main.yml` 文件复制过去（确保目录结构）。

github action 部分的配置就 OK 了

<img width="239" alt="image" src="https://user-images.githubusercontent.com/12368943/226575759-876fbf50-9f57-43bb-9bc2-b2c33e34599e.png">

## 脚本内容

1. 克隆当前仓库代码
2. 设置当前构建所需要的 nodejs 版本
3. 安装依赖
4. 全局安装 `serverless` 的 cli 工具
5. 执行部署

## serverless 配置

在 Tencent cloud 的控制台，创建一个 event 类型的 SCF

手动下载 yml 配置文件。

<img width="1205" alt="image" src="https://user-images.githubusercontent.com/12368943/226576349-b19f84d0-dadf-404a-8541-d898f093e11a.png">

## 必要配置

### 配置 Tencent cloud key/secret

<img width="1145" alt="image" src="https://user-images.githubusercontent.com/12368943/226575356-9f040e7f-74f5-4260-92f7-d167fe26cc4c.png">

> 没有就自己创建一个

1. 秘钥管理：https://console.cloud.tencent.com/cam/capi
2. 取 `SecretId` 和 `SecretKey`
3. 去到需要设置自动部署的仓库里，Settings -> Secrets and variables -> Actions
4. 新增两个 Repository Secrets (字段名字不可以改)

字段 | 值
:----|:----
TENCENT_SECRET_ID | SecretId 的值
TENCENT_SECRET_KEY | SecretKey 的值
