import SecureLS from 'secure-ls';

const ls = new SecureLS();

function setItem(name: string, value: any) {
    return ls.set(name, value)
}

function getItem(name: string) {
    return ls.get(name)
}

function removeItem(name: string) {
    return ls.remove(name)
}

const securestorage = {
    setItem,
    getItem,
    removeItem
}
export default securestorage