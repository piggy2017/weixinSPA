import axios from'axios'
export function getPromise(url){
    const promise=new Promise(function(resolve,reject){
        axios.get(url).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
    return promise
}
