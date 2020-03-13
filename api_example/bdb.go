package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

const BaseUrl = "http://49.233.195.152:3456"
const TriasKitUrl = "http://192.168.x.x:8088/trias/api/"

func KeyValueList(reqFunc string, reqMethod string, params map[string]interface{}) (result string) {
	// key value or list 交易
	// param reqFunc: value or list 表示 key_value 或者 key_list 交易
	// param reqMethod: POST or GET 表示发送交易或者查询交易
	// param params: 交易参数
	// return:
	baseUrl := BaseUrl + "/api/v1/key_" + reqFunc + "/"

	if reqMethod == "POST" {
		jsonStr, _ := json.Marshal(params)
		resp, _ := http.Post(baseUrl, "application/json", bytes.NewBuffer(jsonStr))
		body, _ := ioutil.ReadAll(resp.Body) // body2数据类型 []uint8
		return string(body)
	} else {
		reqUrl := baseUrl + "?key=" + params["key"].(string)
		resp, _ := http.Get(reqUrl)
		body, _ := ioutil.ReadAll(resp.Body) // body2数据类型 []uint8
		return string(body)
	}
}

func KetSet(params map[string]interface{}) (result string) {
	// return:
	reqUrl := TriasKitUrl + "web/keySet"
	jsonStr, _ := json.Marshal(params)
	resp, _ := http.Post(reqUrl, "application/json", bytes.NewBuffer(jsonStr))
	body, _ := ioutil.ReadAll(resp.Body) // body2数据类型 []uint8
	return string(body)
}

func BlockCount() (result string) {
	// 返回当前块高
	// return:
	reqUrl := BaseUrl + "/api/v1/block_count/"
	resp, _ := http.Get(reqUrl)
	body, _ := ioutil.ReadAll(resp.Body)
	return string(body)
}

func TransactionCount() (result string) {
	// 返回当前交易总数
	// return:
	reqUrl := BaseUrl + "/api/v1/trans_count/"
	resp, _ := http.Get(reqUrl)
	body, _ := ioutil.ReadAll(resp.Body)
	return string(body)
}

func NodeCount() (result string) {
	// 返回当前节点总数
	// return:
	reqUrl := BaseUrl + "/api/v1/node_count/"
	resp, _ := http.Get(reqUrl)
	body, _ := ioutil.ReadAll(resp.Body)
	return string(body)
}

func DataSize() (result string) {
	// 返回当前存储空间大小，单位为bytes
	// return:
	reqUrl := BaseUrl + "/api/v1/data_size/"
	resp, _ := http.Get(reqUrl)
	body, _ := ioutil.ReadAll(resp.Body)
	return string(body)
}

func main() {

	// get list
	reqFunc := "list"
	reqMethod := "GET"
	params := map[string]interface{}{"key": "99999"}
	fmt.Println(KeyValueList(reqFunc, reqMethod, params))
	// {"code": 0, "data": {"key": "99999", "list": ["99999"]}, "message": "Success"}

	// get value
	reqFunc2 := "value"
	reqMethod2 := "GET"
	params2 := map[string]interface{}{"key": "66666"}
	fmt.Println(KeyValueList(reqFunc2, reqMethod2, params2))
	// {"code": 0, "data": {"key": "66666", "value": "66666"}, "message": "Success"}

	// post list
	reqFunc3 := "list"
	reqMethod3 := "POST"
	params3 := map[string]interface{}{"key": "99999", "value": "99999"}
	fmt.Println(KeyValueList(reqFunc3, reqMethod3, params3))
	// {"code": 0, "message": "Success"}

	// post value
	reqFunc4 := "value"
	reqMethod4 := "POST"
	params4 := map[string]interface{}{"key": "66666", "value": "66666"}
	fmt.Println(KeyValueList(reqFunc4, reqMethod4, params4))
	// {"code": 0, "message": "Success"}

	ketSetParams := map[string]interface{}{"data": "66666", "ttype": "2"}
	fmt.Println(KetSet(ketSetParams))
	// {"code": 0, "message": "Success"}

	// block count
	fmt.Println(BlockCount())
	// {"code": 0, "count": 325, "message": "Success"}

	// transaction count
	fmt.Println(TransactionCount())
	// {"code": 0, "count": 915, "message": "Success"}

	// node count
	fmt.Println(NodeCount())
	// {"code": 0, "count": 3, "message": "Success"}

	// data size
	fmt.Println(DataSize())
	// {"code": 0, "size": 4442822.0, "message": "success"}
}
