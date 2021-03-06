import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/warehouse/list',
    method: 'get',
    params: query
  })
}

export function create(data) {
  return request({
    url: '/warehouse/create',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/warehouse/update',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: '/warehouse/delete/' + id,
    method: 'post'
  })
}

export function batchDelete(data) {
  return request({
    url: '/warehouse/delete',
    method: 'post',
    data
  })
}

export function getObj(id) {
  return request({
    url: '/warehouse/get/' + id,
    method: 'get'
  })
}
