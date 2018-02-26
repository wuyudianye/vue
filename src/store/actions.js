import * as types from './mutation-type'
import {saveHistory,deleteHistory,savePlayer} from 'common/js/cache'

export const setPlayer = function({commit},list){
    commit(types.SET_PLAYER,savePlayer(list))
}