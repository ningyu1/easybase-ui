import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/warehouse/list',
    method: 'get',
    params: query
  })
}

export function createWarehouse(data) {
  return request({
    url: '/warehouse/create',
    method: 'post',
    data
  })
}

export function updateWarehouse(data) {
  return request({
    url: '/warehouse/update',
    method: 'post',
    data
  })
}

export function deleteWarehouse(id) {
  return request({
    url: '/warehouse/delete/' + id,
    method: 'post'
  })
}

export function getWarehouse(id) {
  return request({
    url: '/warehouse/get/' + id,
    method: 'get'
  })
}
