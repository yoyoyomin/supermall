import {request} from './request'

export function gethomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}
