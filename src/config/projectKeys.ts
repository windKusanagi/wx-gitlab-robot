/*
 * @Author: TanHui
 * @Date: 2021-04-09 17:42:56
 * @LastEditors: TanHui
 * @LastEditTime: 2021-07-26 15:53:37
 * @Description: 各项目微信机器人key
 */
export interface ProjectKeys {
  [k: string]: {
    id: number;
    key: string;
  };
}
const projectKeys: ProjectKeys = {
  // 项目配置
  "daxi-ppt": {
    id: 575, // project id, 在仓库的web页面中可以看到
    key: "f13b53a9-5ff9-4ac4-bb63-8d652caa2580" // 企业微信机器人key
  },
};
export default projectKeys;
