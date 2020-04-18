import { get, post } from '@/utils/axios'

export function getUser (params) {
    return get('/', params)
}