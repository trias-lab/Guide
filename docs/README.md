## 接口使用说明

### key-value

#### Key Get接口

##### url
/api/v1/key_value

##### 方法
GET

##### 参数
- 请求样例
```bash
GET http://server:port/api/v1/key_value?key=20190312dwzq
```

- 详细说明

|args|nullable|type|remark|
|------|------|------|------|
|key|false|string|key word|

##### 返回结果
- json样例

```json
{
    "msg": "success", 
    "data": {
        "key": "20190312dwzq", 
        "value": "add61034eeff9e6adbb81f3f2b68363e"
    }, 
    "code": 0
}
```
- code说明

|number|meaning|suggestion|
|------|------|------|
|0|成功||
|1|失败 key-value不存在||
|5|失败 如服务出现异常等|1分钟后重试|
|7|失败 参数不合法 如key值不能为空|检查参数|

#### Key Set接口

##### url
/api/v1/key_value

##### 方法
POST

##### 参数
- 请求样例
```json
{
    "key": "20190312dwzq", 
    "value": "add61034eeff9e6adbb81f3f2b68363e"
}
```

- 详细说明

|args|nullable|type|remark|
|------|------|------|------|
|key|false|string|key word|
|value|false|string|hash value|


##### 返回结果

- json样例

```json
{
    "msg": "success", 
    "code": 0
}
```
- code说明

|number|meaning|suggestion|
|------|------|------|
|0|成功||
|2|交易仍在处理 将在共识完成后上链|一般情况下交易会上链成功 可以等待2分钟后使用查询接口确认交易是否完成上链|
|4|交易仍在排队 等待处理|等待4分钟后使用查询接口确认交易是否完成上链 如果仍未上链可重新发送请求|
|3|失败 相同key但不同value的资产已经存在||
|5|失败 如服务出现异常等|1分钟后重试|
|7|失败 参数不合法 如key值不能为空|检查参数|



### key-list

#### List Get接口

##### url
/api/v1/key_list/

##### 方法
GET

##### 参数
- 请求样例
```bash
GET http://server:port/api/v1/key_list?key=20190312
```

- 详细说明

|args|nullable|type|remark|
|------|------|------|------|
|key|false|string|key word|

##### 返回结果
- json样例

```json
{
    "msg": "success",
    "data": {
        "key": "20190312",
        "list": [
            "20190312dwzq",
            "20190312sjs"
        ]
    },
    "code": 0
}
```
- code说明

|number|meaning|suggestion|
|------|------|------|
|0|成功||
|1|失败 key不存在||
|5|失败 如服务出现异常等|1分钟后重试|
|7|失败 参数不合法 如key值不能为空|检查参数|

#### List Add接口

##### url
/api/v1/key_list/

##### 方法
POST

##### 参数
- 请求样例
```json
{
    "key": "20190312",
    "value": "20190312dfzq"
}
```

- 详细说明

|args|nullable|type|remark|
|------|------|------|------|
|key|false|string|key word|
|value|false|string|hash value|


##### 返回结果

- json样例

```json
{
    "msg": "success",
    "code": 0
}
```

- code说明

|number|meaning|suggestion|
|------|------|------|
|0|成功||
|2|交易仍在处理 将在共识完成后上链|一般情况下交易会上链成功 可以等待2分钟后使用查询接口确认交易是否完成上链|
|4|交易仍在排队 等待处理|等待4分钟后使用查询接口确认交易是否完成上链 如果仍未上链可重新发送请求|
|5|失败 如服务出现异常等|1分钟后重试|
|7|失败 参数不合法 如key值不能为空|检查参数|


#### Block Count接口

##### url
/api/v1/block_count/

##### 方法
GET

##### 参数
无

##### 返回结果

- json样例

```json
{
    "msg": "success",
    "count": 167,
    "code": 0
}
```

- code说明

|number|meaning|suggestion|
|------|------|------|
|0|成功||
|5|失败 如服务出现异常等|1分钟后重试|



#### Transaction Count接口

##### url
/api/v1/trans_count/

##### 方法
GET

##### 参数
无

##### 返回结果

- json样例

```json
{
    "msg": "success",
    "count": 1873,
    "code": 0
}
```

- code说明

|number|meaning|suggestion|
|------|------|------|
|0|成功||
|5|失败 如服务出现异常等|1分钟后重试|



#### Transaction Count Interval接口

##### url
/api/v1/trans_count_interval/

##### 方法
GET

##### 参数
- 请求样例
```bash
GET http://server:port/api/v1/key_value/?count=30&delta=1
```

- 详细说明

|args|nullable|type|remark|
|------|------|------|------|
|count|false|int|区间数量 如统计30个数据|
|delta|false|int|区间长度 单位为分钟 如按照每分钟进行统计|

##### 返回结果

- json样例

```json
{
    "code": 0,
    "data": [
        {
            "count": 3,
            "timestamp": 1557807300
        },
        {
            "count": 0,
            "timestamp": 1557807360
        },
        {
            "count": 5,
            "timestamp": 1557807420
        }
    ],
    "message": "Success"
}
```

- timestamp升序排列

- code说明

|number|meaning|suggestion|
|------|------|------|
|0|成功||
|5|失败 如服务出现异常等|1分钟后重试|
|7|失败 参数不合法 如count和delta值不能为空|检查参数|


#### Node Count接口

##### url
/api/v1/node_count/

##### 方法
GET

##### 参数
无

##### 返回结果

- json样例

```json
{
    "msg": "success",
    "count": 7,
    "code": 0
}
```

- code说明

|number|meaning|suggestion|
|------|------|------|
|0|成功||
|5|失败 如服务出现异常等|1分钟后重试|



#### Node IPs接口

##### url
/api/v1/node_ips/

##### 方法
GET

##### 参数
无

##### 返回结果

- json样例

```json
{
    "msg": "success",
    "data": ["192.168.1.231", "192.168.1.232", "192.168.1.233"],
    "code": 0
}
```

- code说明

|number|meaning|suggestion|
|------|------|------|
|0|成功||
|5|失败 如服务出现异常等|1分钟后重试|


#### Data Size接口

##### url
/api/v1/data_size/

##### 方法
GET

##### 参数
无

##### 返回结果

- json样例

```json
{
    "msg": "success",
    "size": 10059298.0,
    "code": 0
}
```

- size说明
单位为bytes

- code说明

|number|meaning|suggestion|
|------|------|------|
|0|成功||
|5|失败 如服务出现异常等|1分钟后重试|



#### Day Trans Count接口

##### url
/api/v1/day_block_count/

##### 方法
GET

##### 参数
无

##### 返回结果

- json样例

```json
{
    "msg": "success",
    "count": 75,
    "code": 0
}
```

- code说明

|number|meaning|suggestion|
|------|------|------|
|0|成功||
|5|失败 如服务出现异常等|1分钟后重试|



#### KeySet接口

##### url
/trias/api/web/keySet

##### 方法
POST

##### 参数
- 请求样例
```json
{
    "data": "transactiondata", 
    "ttype": "2"
}
```

- 详细说明

|args|nullable|type|remark|
|------|------|------|------|
|data|false|string|transaction|
|ttype|false|string|set type|

ttype:交易模式：
1，先写到DB，异步写入链；
2，写入到DB，并且写入链，但是不等共识成功；
3，写入到DB，并且上链共识完成，
4，写入消息中间件即可

##### 返回结果

- json样例

```json
{
    "ref": 1594262035967140000,
    "result": {
        "dbId": "30",
        "errors": [
            {
                "code": 3,
                "detail": "call bdb error"
            },
            {
                "code": 3,
                "detail": "call tm error"
            },
            {
                "code": 3,
                "detail": "call fabric error"
            }
        ]
    }
}
```

- ref说明
时间戳

- errors说明
分别存储到服务的错误信息

