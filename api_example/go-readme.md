#### 发起 key value 交易
```go
// 准备参数
reqFunc := "value"
reqMethod := "POST"
params := map[string]interface{}{"key": "2020-02-12", "value": "1111"}
// 进行请求
fmt.Println(KeyValueList(reqFunc, reqMethod, params))
```
```json
{
  'code': 0, 
  'message': 'Success',
}
```

#### 查看 key value 交易
```go
// 准备参数
reqFunc := "value"
reqMethod := "GET"
params := map[string]interface{}{"key": "2020-02-12"}
// 进行请求
fmt.Println(KeyValueList(reqFunc, reqMethod, params))
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
```go
// 准备参数
reqFunc := "list"
reqMethod := "POST"
params := map[string]interface{}{"key": "2020-02-12_list", "value": "1111"}
// 进行请求
fmt.Println(KeyValueList(reqFunc, reqMethod, params))
```
```json
{
  'code': 0, 
  'message': 'Success',
}
```

#### 查看 key list 交易
```go
// 准备参数
reqFunc := "list"
reqMethod := "GET"
params := map[string]interface{}{"key": "2020-02-12_list"}
// 进行请求
fmt.Println(KeyValueList(reqFunc, reqMethod, params))
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


#### key:value 交易

新版本的api接口：交易会根据参数选择来写入到bdb/trias/mysql等，写入顺序也由参数决定
```go
// 准备参数
ketSetParams := map[string]interface{}{"data": "66666", "ttype": "2"}
// 进行请求
fmt.Println(KetSet(ketSetParams))
```
参数：

data:
    上链数据

ttype:交易模式：

    1，先写到DB，异步写入链；

    2，写入到DB，并且写入链，但是不等共识成功；

    3，写入到DB，并且上链共识完成，

    4，写入消息中间件即可
    
返回
```json
{
    "ref": 1584099119949948000,
    "result": {
        "dbId": "86",
        "hash": "YWNjYzQxOGYyM2Q1YjkyMjY0MjA5ZTlmNmRkOTZhZWQwNjhiZmQ3YmJiMWQ4YWUyMzdhY2U1Njg3OTcwZmRiNA=="
    }
}
```


#### 查看当前块高
```go
fmt.Println(BlockCount())
```
```json
{
    "code": 0,
    "count": 322,
    "message": "Success"
}
```

#### 查看交易总数
```go
fmt.Println(TransactionCount())
```
```json
{
    "code": 0,
    "count": 912,
    "message": "Success"
}
```

#### 查看当前节点数
```go
fmt.Println(NodeCount())
```
```json
{
    "code": 0,
    "count": 3,
    "message": "Success"
}
```

#### 查看当前存储空间大小，单位为bytes
```go
fmt.Println(DataSize())
```
```json
{
    "code": 0,
    "size": 4435219.0,
    "message": "success"
}
```