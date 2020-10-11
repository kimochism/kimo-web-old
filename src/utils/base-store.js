
export const buildStore = (store) => {
    const keys = Object.keys(store);
    const obj = {};

    keys.forEach(key => {
        obj[key] = {
            get() {
                return store[key];
            },
            set(value) {
                store[key] = value;
            }
        }
    });

    return obj;
}

export const clearStore = (store) => {
    const keys = Object.keys(store);

    keys.forEach(key => {
        store[key] = null;
    })
}