import axios from "axios"
import qs from "qs"

// api + "/finproinfo/" + id +"/findall"

const api = "/api"

/**
 * 查询申请列表显示
 * 
 */
export function applyList(pageNum){
    return axios.get(api + "/xydaSelect/findall",{
        params:{
            pageNum
        }
        })
}

/**
 * 上传
 * @param {} file 
 */
export function uoloadFile(formData){
    return axios({
        url: api + "/xydaSelect/upload",
        method: "post",
        data: formData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
}


/**
 * 申请提交
 * @param {} qyname 
 * @param {*} uscc 
 * @param {*} fddbr 
 * @param {*} sqtys 
 * @param {*} cxresult 
 * @param {*} imgUrl 
 */
export function addApply({qyname,uscc,fddbr,cxresult,sqtys,}){
    return axios.post(api + "/xydaSelect/add",qs.stringify({
      qyname,uscc,fddbr,cxresult,sqtys,
    }))
}
