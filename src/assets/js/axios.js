/**
 * post请求封装
 * 
 * @param string url 请求连接
 * @param oject params 请求参数
 * @param boolean token 是否携带token
 * 
 * @return mixed number/data
 */

function post(url, params, auth = true){
    return new Promise(async(resolve, reject) => {
        if( auth ) {
            let exist = url.indexOf('?');
            if( exist != -1 ) {
                url = `${url}&user_id=${localStorage.getItem('aid')}&token=${localStorage.getItem('token')}`;
            } else {
                url = `${url}?user_id=${localStorage.getItem('aid')}&token=${localStorage.getItem('token')}`;
            }
        }
        let res = await axios.post(url, params);
        if(res.status == 200) {
            if( res.data.state == 0 && res.data.message == 'AUTO_ERROR' ) {
                store.commit('changeLoading', true);
                router.push('/login');
            } else {
                resolve(res.data);
            }
        } else {
            store.commit('changeLoading', true);
            router.push('/login');
        }
    })
}

function get(url, auth = true){
    return new Promise(async(resolve, reject) => {
        if( auth ) {
            let exist = url.indexOf('?');
            if( exist != -1 ) {
                url = `${url}&user_id=${localStorage.getItem('aid')}&token=${localStorage.getItem('token')}`;
            } else {
                url = `${url}?user_id=${localStorage.getItem('aid')}&token=${localStorage.getItem('token')}`;
            }
        }
        let res = await axios.get(url);
        if(res.status == 200) {
            if( res.data.state == 0 && res.data.message == 'AUTO_ERROR' ) {
                store.commit('changeLoading', true);
                router.push('/login');
            } else {
                resolve(res.data);
            }
        } else {
            store.commit('changeLoading', true);
            router.push('/login');
        }
    })
}

export default {
    post,
    get
}