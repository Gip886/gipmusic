import api from "./instance";
/**
 * @method 获取推荐歌单
 * @param limit 取出数量默认为30
 */
export const getPersonalized = (limit) =>
  // ES 语法 模板字符串
  api.get(`/personalized?limit=${limit}`, {});
