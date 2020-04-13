import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/position/list',
    method: 'get',
    params: query
  })
}

export function create(data) {
  return request({
    url: '/position/create',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/position/update',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: '/position/delete/' + id,
    method: 'post'
  })
}

export function batchDelete(data) {
  return request({
    url: '/position/delete',
    method: 'post',
    data
  })
}

export function getObj(id) {
  return request({
    url: '/position/get/' + id,
    method: 'get'
  })
}
