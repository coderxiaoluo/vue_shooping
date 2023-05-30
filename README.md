# 接口文档说明

当前项目为电商的示例项目

**baseURL(公共接口)**: http://47.106.181.87:8088

#### 登录接口

**请求方式**: POST

**接口地址**:  /auth/login

**请求参数**

​	必选参数:

- username
- password

**调用例子**:

```js
methods:post,    
url: "/auth/login",
data: {
    	username:xxxx,
     	password:xxxx
    }
```

#### 注册接口

**请求方式**:POST

**接口地址**: /auth/register

**请求参数**

​	必选参数:

- username
- password

**调用例子**:

```js
methods:post,    
url: "/auth/register",
data: {
    	username:xxxx,
     	password:xxxx
    }
```

#### 商品列表查询

**请求方式**:POST

**接口地址**: /type/getList

**请求参数**:无

