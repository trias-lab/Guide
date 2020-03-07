#### 创建 BDB 对象
```python
from bdb import BDB_API
bdb_api = BDB_API("http://49.233.195.152:3456")
```

#### 发起 key value 交易
```python
params = {"key": "2020-02-12", "value": "1111"}
print(bdb_api.key_value_list("value", "POST", params).json())
```
```json
{
  'code': 0, 
  'message': 'Success',
}
```

#### 查看 key value 交易
```python
params = {"key": "2020-02-12"}
print(bdb_api.key_value_list("value", "GET", params).json())
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
```python
params = {"key": "2020-02-12_list", "value": "1111"}
print(bdb_api.key_value_list("list", "POST", params).json())
```
```json
{
  'code': 0, 
  'message': 'Success',
}
```

#### 查看 key list 交易
```python
params = {"key": "2020-02-12_list"}
print(bdb_api.key_value_list("list", "GET", params).json())
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
```python
print(bdb_api.block_count().json())
```
```json
{
    "code": 0,
    "count": 322,
    "message": "Success"
}
```

#### 查看交易总数
```python
print(bdb_api.transaction_count().json())
```
```json
{
    "code": 0,
    "count": 912,
    "message": "Success"
}
```

#### 查看当前节点数
```python
print(bdb_api.node_count().json())
```
```json
{
    "code": 0,
    "count": 3,
    "message": "Success"
}
```

#### 查看当前存储空间大小，单位为bytes
```python
print(bdb_api.data_size().json())
```
```json
{
    "code": 0,
    "size": 4435219.0,
    "message": "success"
}
```