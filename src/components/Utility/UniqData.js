export const UniqData = (data, key) => {
    // console.log("data", data);
    // console.log("data", key);

    const uniq = data.map((d) => {
        return d[key];
    })

    const removeDuplicate = uniq.filter((data, id) => {
        return uniq.indexOf(data) === id
    })

    return removeDuplicate
}