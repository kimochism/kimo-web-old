
export const buildStore = (store) => {
    const keys = Object.keys(store);
    const obj = {};

    keys.forEach(key => {
        obj[key] = () => { return store[key] };
    });

    return obj;
}
