// gitlab的api地址，一般为 公司使用的gitlab地址/api/v4, 形如http://www.gitlab.com/api/v4, 私服与公服皆可
export const GITLAB_API_V4 = "https://gitlab.plaso.cn/api/v4";
// 访问gitlab API所需要的access_token: https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#personal-access-tokens
export const GITLAB_ACCESS_TOKEN = "JWTEqXgSss6zQZ2tmC_v";
// gitlab事件通过webhook对此项目URL发起请求时请求头中携带有 `x-gitlab-token`,通过判定该请求头中是否包含GITLAB_EVENT_TOKEN，从而决定是否处理该次请求
export const GITLAB_EVENT_TOKEN = "gitlab-hook";


// https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=f13b53a9-5ff9-4ac4-bb63-8d652caa2580