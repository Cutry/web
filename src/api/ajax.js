import axios from "axios"
import qs from "qs"

// api + "/finproinfo/" + id +"/findall"

const api = "/api"
/**
 * 保存和提交产品
 * 
 */
export function saveProduct({proname,prointroduce,procharacter,applicationrequire,application_url,subordinatebank,remarkinformation,state}){
    return axios.post(api + "/finproinfo/add",qs.stringify({
        proname,prointroduce,procharacter,applicationrequire,application_url,subordinatebank,remarkinformation,state
    }))
}
/**
 * 产品列表显示
 * 
 */
export function ListAjax(pageNum,shstate){
    return axios.get(api + "/finproinfo/findall",{
        params:{
            pageNum,
            shstate
        }
    })
}
/**
 * 修改产品
 * 
 */

export function updatePro({proname,prointroduce,procharacter,applicationrequire,application_url,subordinatebank,remarkinformation,id}){
    return axios.post(api + "/finproinfo/update",qs.stringify({
        proname,prointroduce,procharacter,applicationrequire,application_url,subordinatebank,remarkinformation,id
    }))
}
/**
 * 删除产品
 * 
 */
export function deletePro(id){
    return axios.post(api + "/finproinfo/delete",qs.stringify({
            id
        }))
}
/**
 * 审核记录
 * 
 */
export function checkPro(id,pageNum){
    return axios.get(api + "/shpro/findallById",{
        params:{
            id,
            pageNum
        }
    })
}
/**
 * 运营产品列表显示
 * 
 */
export function Listyy(pageNum,shstate){
    return axios.get(api + "/finproinfo/findallBySh",{
        params:{
            pageNum,
            shstate
        }
    })
}
/**
 * 审核
 * 
 */
export function check(proid,shidea,shstate){
    return axios.post(api + "/shpro/add",qs.stringify({
        proid,shidea,shstate
    }))
}

// function padLeftZero(str) {
//     return ('00' + str).substr(str.length);
// }