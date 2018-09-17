import * as host from './config.js'
import { get, post } from './fetch'

export const REST = {

	login(params) {
		return post(host.Login, params)
	}
};
