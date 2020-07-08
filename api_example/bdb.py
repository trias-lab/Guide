import requests


class BDB_API(object):
    def __init__(self, base_url):
        self.BASE_URL = base_url

    def key_value_list(self, func, method, params):
        """
        key value or list 交易
        :param func: value or list 表示 key_value 或者 key_list 交易
        :param method: POST or GET 表示发送交易或者查询交易
        :param params: 交易参数
        :return:
        """
        request_url = self.BASE_URL + "/api/v1/key_%s/" % func
        if method == "POST":
            response = requests.post(request_url, json=params)
        else:
            response = requests.get(request_url, params=params)
        return response

    def block_count(self):
        """
        返回当前块高
        :return:
        """
        request_url = self.BASE_URL + "/api/v1/block_count/"
        response = requests.get(request_url)
        return response

    def transaction_count(self):
        """
        返回当前交易总数
        :return:
        """
        request_url = self.BASE_URL + "/api/v1/trans_count/"
        response = requests.get(request_url)
        return response

    def node_count(self):
        """
        返回当前节点总数
        :return:
        """
        request_url = self.BASE_URL + "/api/v1/node_count/"
        response = requests.get(request_url)
        return response

    def data_size(self):
        """
        返回当前存储空间大小，单位为bytes
        :return:
        """
        request_url = self.BASE_URL + "/api/v1/data_size/"
        response = requests.get(request_url)
        return response


if __name__ == '__main__':
    bdb_api = BDB_API("http://49.233.195.152:3456")#测试网IP地址和接口，可能随时变化，如果发现不通，请联系团队


    # 发起 key value 交易
    params = {"key": "2020-02-12", "value": "1111"}
    print(bdb_api.key_value_list("value", "POST", params).json())
    # {'code': 0, 'message': 'Success'}

    # 查看 key value 交易
    params = {"key": "2020-02-12"}
    print(bdb_api.key_value_list("value", "GET", params).json())
    # {'code': 0, 'data': {'key': '2020-02-12', 'value': '1111'}, 'message': 'Success'}

    # 发起 key list 交易
    params = {"key": "2020-02-12_list", "value": "1111"}
    print(bdb_api.key_value_list("list", "POST", params).json())
    # {'code': 0, 'message': 'Success'}

    # 查看 key list 交易
    params = {"key": "2020-02-12_list"}
    print(bdb_api.key_value_list("list", "GET", params).json())
    # {'code': 0, 'data': {'key': '2020-02-12_list', 'list': ['1111']}, 'message': 'Success'}

    # 查看当前块高
    print(bdb_api.block_count().json())
    # {'code': 0, 'count': 322, 'message': 'Success'}

    # 查看交易总数
    print(bdb_api.transaction_count().json())
    # {'code': 0, 'count': 912, 'message': 'Success'}

    # 查看当前节点数
    print(bdb_api.node_count().json())
    # {'code': 0, 'count': 3, 'message': 'Success'}

    # 查看当前存储空间大小，单位为bytes
    print(bdb_api.data_size().json())
    # {'code': 0, 'size': 4435219.0, 'message': 'success'}


