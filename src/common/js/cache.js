import storage from 'good-storage'


const PLAYER_KEY = '__player__'


export function savePlayer(list){
    storage.set(PLAYER_KEY,list)
    return storage.get(PLAYER_KEY,[])
}

export function getPlayer(){
    return storage.get(PLAYER_KEY,[])
}