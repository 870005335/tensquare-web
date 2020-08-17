import Cookies from 'js-cookie'

const TokenKey = 'User-Token'
const NameKey = 'User-Name'
const AvatarKey = 'User-Avatar'

export function setUser(token, name, avatar) {
    Cookies.set(TokenKey, token);
    Cookies.set(NameKey, name);
    Cookies.set(AvatarKey, avatar);
}

export function getUser() {
    let token = Cookies.get(TokenKey);
    let name = Cookies.get(NameKey);
    let avatar = Cookies.get(AvatarKey);
    let user = {token, name, avatar}
    return user
}

export function removeUser() {
    Cookies.remove(TokenKey);
    Cookies.remove(NameKey);
    Cookies.remove(AvatarKey);
}