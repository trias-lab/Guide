运行示例：

```node bdb.js```

#### 创建 BDB 对象
```js
var BDB_API = require("./bdb.js")
var bdb_api = BDB_API("http://49.233.195.152:3456")
```

#### 发起 key value 交易
```js
var params = { "key": "2020-02-12", "value": "1111" }
bdb_api.key_value_list("value", "POST", params)
    .then(data => {
        console.log("\n发起 key value 交易:")
        console.log(JSON.stringify(data))
    })
```
```json
{
  'code': 0, 
  'message': 'Success',
}
```

#### 查看 key value 交易
```js
params = { "key": "2020-02-12" }
bdb_api.key_value_list("value", "GET", params)
    .then(data => {
        console.log("\n查看 key value 交易:")
        console.log(JSON.stringify(data))
    })
```
```json
{
    "code": 0,
    "data": {
        "key": "2020-02-12",
        "value": "1111"
    },
    "message": "Success"
}
```

#### 发起 key list 交易
```js
params = { "key": "2020-02-12_list", "value": "1111" }
bdb_api.key_value_list("list", "POST", params)
    .then(data => {
        console.log("\n发起 key list 交易:")
        console.log(JSON.stringify(data))
    })
```
```json
{
  'code': 0, 
  'message': 'Success',
}
```

#### 查看 key list 交易
```js
params = { "key": "2020-02-12_list" }
bdb_api.key_value_list("list", "GET", params)
    .then(data => {
        console.log("\n查看 key list 交易:")
        console.log(JSON.stringify(data))
    })
```
```json
{
    "code": 0,
    "data": {
        "key": "2020-02-12_list",
        "list": [
            "1111"
        ]
    },
    "message": "Success"
}
```

#### 查看当前块高
```js
bdb_api.block_count()
    .then(data => { 
        console.log("\n查看当前块高:")
        console.log(JSON.stringify(data))
    })
```
```json
{
    "code": 0,
    "count": 322,
    "message": "Success"
}
```

#### 查看交易总数
```js
bdb_api.transaction_count()
    .then(data => { 
        console.log("\n查看交易总数:")
        console.log(JSON.stringify(data))
    })
```
```json
{
    "code": 0,
    "count": 912,
    "message": "Success"
}
```

#### 查看当前节点数
```js
bdb_api.node_count()
    .then(data => { 
        console.log("\n查看当前节点数:")
        console.log(JSON.stringify(data))
    })
```
```json
{
    "code": 0,
    "count": 3,
    "message": "Success"
}
```

#### 查看当前存储空间大小，单位为bytes
```js
bdb_api.data_size()
    .then(data => { 
        console.log("\n查看当前存储空间大小，单位为bytes:")
        console.log(JSON.stringify(data))
    })
```
```json
{
    "code": 0,
    "size": 4435219.0,
    "message": "success"
}
```