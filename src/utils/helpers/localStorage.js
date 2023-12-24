export const keepData = (key, data) => {
    localStorage.setItem(key, data);
};

export const getData = (key) => {
    const data = localStorage.getItem(key);
    if(!data) {
        return null;
    } 
    
    return data;
};