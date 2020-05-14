import "com-tools"

declare const disableNavToOnceLaunchLocaKey:"_disableNavToOnceLaunchLocaKey_";
declare const lastUrlUtilsKey:"_lastUrlUtilsKey_";

type ParamType = "searchParams" | "hashParams";
type ParamTypeOpts = ParamType | [ParamType,ParamType];


type IncludeAndExcludeKeysOptions = { include?: string[], exclude?: string[] };
type ClearExtraUrlParams = IncludeAndExcludeKeysOptions | {search?:IncludeAndExcludeKeysOptions|null,hash?:IncludeAndExcludeKeysOptions|null};

interface UrlParamNavOpts {
    locakey : string;   //必选； url 参数中表示 要导致到的位置 的key；
    navCB : (launchLoca : any,launchUnit : UrlUtils,urlUtils : UrlUtils)=>void;    //必选；需要执行导航时的回调函数；该函数负责完成真正的导航逻辑；
    once ?: ParamTypeOpts;   //在一次会话过程中只会导航一次的 url 参数的属性名字 或 数组；即，如果 searchParams 中的 位置 需要只在整个会话（session）中导航一次，即刷新也不再导航，那么可能过把 "searchParams" 传给该属性
    every ?: ParamTypeOpts;   //在一次会话过程中每次重新加载页面者会导航的 url 参数的属性名字 或 数组；即，如果 searchParams 中的 位置 需要在整个会话（session）中每次加载页面都导航，那么可能过把 "searchParams" 传给该属性
    clearParams ?: ClearExtraUrlParams|null;   //清除多余参数的配置；
}


type NavToLaunchLocaOfParams = (url?:string)=>void;

/**
 * createFunToNavToLaunchLocaOfParams(options)
 * 该函数用于生成 导航到启动位置的函数 navToLaunchLocaOfParams(url)； 生成的 navToLaunchLocaOfParams(url) 函数 可导航到 url 参数中指定的位置
 *
 * @param options : {locakey,navCB,once,every,clearParams}
 * locakey : string   必选； url 参数中表示 要导致到的位置 的key；
 * navCB : (launchLoca : any,launchUnit : UrlUnit,urlUtils : UrlUtils)=>Void    必选；需要执行导航时的回调函数；该函数负责完成真正的导航逻辑；
 * once ?: "searchParams" | "hashParams" | ["searchParams","hashParams"]   在一次会话过程中只会导航一次的 url 参数的属性名字 或 数组；即，如果 searchParams 中的 位置 需要只在整个会话（session）中导航一次，即刷新也不再导航，那么可能过把 "searchParams" 传给该属性
 * every ?: "searchParams" | "hashParams" | ["searchParams","hashParams"]   在一次会话过程中每次重新加载页面者会导航的 url 参数的属性名字 或 数组；即，如果 searchParams 中的 位置 需要在整个会话（session）中每次加载页面都导航，那么可能过把 "searchParams" 传给该属性
 * clearParams ?: ClearExtraUrlParams   清除多余参数的配置；
 *
 * @return navToLaunchLocaOfParams(url) :  返回一个函数 navToLaunchLocaOfParams(url)，该函数用于根据 options 的配置导航到相应的位置
 */
export function createFunToNavToLaunchLocaOfParams(options:UrlParamNavOpts):NavToLaunchLocaOfParams;











/**
 * replaceCurrUrlByDisableNav(url,allowNavToLaunchLoca)
 * 替换当前 url 并 禁止导航到一次启动位置
 * @param url : string | UrlUtils   要被替换成的 url
 * @param allowNavToLaunchLoca ?: boolean   可选；默认值：fasle；是否允许导航到启动位置；
 */
export function replaceCurrUrlByDisableNav(url:string|UrlUtils,allowNavToLaunchLoca?:boolean):void;







/**
 * clearExtraUrlParams(extraOptions,urlUtils,allowNavToLaunchLoca)
 * 清除多余的url参数
 * @param extraOptions : ClearExtraUrlParams   必须；配置 searchParams 和 hashParams 的  包含 和 排除 的 key 的 数组 的 选项；如果 直接传 IncludeAndExcludeKeysOptions 类型的对象，则默认会被应用到 searchParams 和 hashParams
 * @param urlUtils ?: UrlUtils    可选；默认值：当前 location.href 的 UrlUtils 对象； 被清理的url；
 * @param allowNavToLaunchLoca ?: boolean   可选；默认值：fasle；是否允许导航到启动位置；
 * @return boolean : 原来的 url 是否需要被清除
 *
 * ClearExtraUrlParams = IncludeAndExcludeKeysOptions | {search:IncludeAndExcludeKeysOptions,hash:IncludeAndExcludeKeysOptions}
 */
export function clearExtraUrlParams(extraOptions:ClearExtraUrlParams,urlUtils?:UrlUtils,allowNavToLaunchLoca?:boolean):boolean;
