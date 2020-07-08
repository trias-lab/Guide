/**
 * 封装 http 模块的 GET/POST 请求
 */
var http = require("http");
var URL = require('url');
var HttpUtil = {
    //get提交url，返回html数据
    get: function (url, params) {
        // 拼接参数 
        if (params) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        return new Promise((resolve, reject) => {
            http.get(url, function (res) {
                var result = "";
                res.setEncoding("UTF-8");
                res.on("data", function (data) {
                    result += data;
                });
                res.on('end', function () {
                    return resolve(JSON.parse(result));
                });
                res.on('error', function () {
                    return reject();
                });
            });
        })
    },
    post: function (url, body) {
        var bodyString = JSON.stringify(body);
        let urlObj = URL.parse(url)
        var opts = {
            hostname: urlObj.hostname,
            port: urlObj.port,
            path: urlObj.path,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': bodyString.length
            }
        }
        return new Promise((resolve, reject) => {
            var req = http.request(opts, function (res) {
                var result = "";
                res.setEncoding("UTF-8");
                res.on("data", function (data) {
                    result += data;
                });
                res.on('end', function () {
                    return resolve(JSON.parse(result));
                });
                res.on('error', function () {
                    return reject();
                });
            });
            req.write(bodyString);
            req.end();
        })
    }
}

/**
 * 定义 BDB_API
 */
class BDB_API {
    constructor(base_url) {
        this.BASE_URL = base_url
    }

    /**
     * key value or list 交易
     * @param {*} func value or list 表示 key_value 或者 key_list 交易
     * @param {*} method POST or GET 表示发送交易或者查询交易
     * @param {*} params 交易参数
     */
    key_value_list(func, method, params) {
        var request_url = this.BASE_URL + "/api/v1/key_" + func + "/"
        if (method === "POST") {
            return HttpUtil.post(request_url, params)
        } else {
            return HttpUtil.get(request_url, params)
        }
    }

    /**
     * 返回当前块高
     */
    block_count() {
        var request_url = this.BASE_URL + "/api/v1/block_count/"
        return HttpUtil.get(request_url)
    }

    /**
     * 返回当前交易总数
     */
    transaction_count() {
        var request_url = this.BASE_URL + "/api/v1/trans_count/"
        return HttpUtil.get(request_url)
    }

    /**
     * 返回当前节点总数
     */
    node_count() {
        var request_url = this.BASE_URL + "/api/v1/node_count/"
        return HttpUtil.get(request_url)
    }

    /**
     * 返回当前存储空间大小，单位为bytes
     */
    data_size() {
        var request_url = this.BASE_URL + "/api/v1/data_size/"
        return HttpUtil.get(request_url)
    }
}

/**
 * 测试 BDB_API
 */
var bdb_api = new BDB_API("http://49.233.195.152:3456")

// 发起 key value 交易
var params = {"key": "2020-02-12", "value": "1111"}
bdb_api.key_value_list("value", "POST", params)
    .then(data => {
        console.log("\n发起 key value 交易:")
        console.log(JSON.stringify(data))
        // {'code': 0, 'message': 'Success'}
    })

// 查看 key value 交易
params = {"key": "2020-02-12"}
bdb_api.key_value_list("value", "GET", params)
    .then(data => {
        console.log("\n查看 key value 交易:")
        console.log(JSON.stringify(data))
        // {'code': 0, 'data': {'key': '2020-02-12', 'value': '1111'}, 'message': 'Success'}
    })

// 发起 key list 交易
params = {"key": "2020-02-12_list", "value": "1111"}
bdb_api.key_value_list("list", "POST", params)
    .then(data => {
        console.log("\n发起 key list 交易:")
        console.log(JSON.stringify(data))
        // {'code': 0, 'message': 'Success'}
    })

// 查看 key list 交易
params = {"key": "2020-02-12_list"}
bdb_api.key_value_list("list", "GET", params)
    .then(data => {
        console.log("\n查看 key list 交易:")
        console.log(JSON.stringify(data))
        // {'code': 0, 'data': {'key': '2020-02-12_list', 'list': ['1111']}, 'message': 'Success'}
    })

// 查看当前块高
bdb_api.block_count()
    .then(data => {
        console.log("\n查看当前块高:")
        console.log(JSON.stringify(data))
        // {'code': 0, 'count': 322, 'message': 'Success'}
    })

// 查看交易总数
bdb_api.transaction_count()
    .then(data => {
        console.log("\n查看交易总数:")
        console.log(JSON.stringify(data))
        // {'code': 0, 'count': 912, 'message': 'Success'}
    })

// 查看当前节点数
bdb_api.node_count()
    .then(data => {
        console.log("\n查看当前节点数:")
        console.log(JSON.stringify(data))
        // {'code': 0, 'count': 3, 'message': 'Success'}
    })

// 查看当前存储空间大小，单位为bytes
bdb_api.data_size()
    .then(data => {
        console.log("\n查看当前存储空间大小，单位为bytes:")
        console.log(JSON.stringify(data))
        // {'code': 0, 'size': 4435219.0, 'message': 'success'}
    })