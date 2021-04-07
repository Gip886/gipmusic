import api from "./instance";

/**
 * @method 获取推荐歌单
 * @param limit 取出数量默认为30
 */
export const getPersonalized = (limit) =>
  // ES 语法 模板字符串
  api.get(`/personalized?limit=${limit}`, {});

/**
 * @method 获取歌单详情
 * @param id 歌单 id
 */
export const getSonglist = (id) =>
  // ES 语法 模板字符串
  api.get(`/playlist/detail?id=${id}`, {});

/**
 * @method 获取歌曲详情
 * @param ids 歌曲 id
 */
 export const getSongDetails = (id) =>
 // ES 语法 模板字符串
 api.get(`/song/detail?ids=${id}`, {});
  
