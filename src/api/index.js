/**
 * services文件api，统一出口
 */
import * as getApi from './service/api'
export default{
    // ES语法展开运算符号
    ...getApi,
}