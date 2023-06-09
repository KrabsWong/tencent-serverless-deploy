# 使用 Github Action 自动部署 Tencent Serverless 项目

在仓库中新增目录 `.github/workflows/main.yml`

将当前仓库根目录下的 `main.yml` 文件复制过去（确保目录结构）。

github action 部分的配置就 OK 了

<img width="849" alt="image" src="https://user-images.githubusercontent.com/12368943/226808338-b800f0be-c712-42fe-b509-9560af94795d.png">

## 脚本内容

1. 克隆当前仓库代码
2. 设置当前构建所需要的 nodejs 版本
3. 安装依赖
4. 全局安装 `serverless` 的 cli 工具
5. 全局安装 `typescript` （不需要使用 typescript，则注释掉该步骤）
6. 执行 `tsc` 编译 typescirpt 文件（不需要使用 typescript，则注释掉该步骤）
7. 执行部署

## serverless 配置

在 Tencent cloud 的控制台，创建一个 event 类型的 SCF

手动下载 serverless.yml 配置文件，放到仓库的根目录。（文件名确保是 `serverless.yml`）

<img width="1205" alt="image" src="https://user-images.githubusercontent.com/12368943/226576349-b19f84d0-dadf-404a-8541-d898f093e11a.png">

## github 配置 Tencent cloud key/secret

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

## 支持 typescript

使用 typescript 编写代码，则需要做一定的目录结构约定

1. 所有源码依然放在 `src` 目录中
2. 编译后的 js 代码，会生成在 `src` 同级的 `dist` 目录中
3. **在项目根目录中，新增 `index.js` 文件，作为实际入口文件存在。其中唯一逻辑，就是调用 `dist/index`
中的入口方法**
4. `serverless.yml` 文件配置的 `src` 值设置为当前根目录。目的是将 node_modules 可以打包到发布包中
5. `tsconfig.json` 放在根目录
