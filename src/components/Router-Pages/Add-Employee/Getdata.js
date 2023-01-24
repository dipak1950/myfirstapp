const gatdata = () => {
    const data = localStorage.getItem("crud");
    if (!data) {
        return [];
    } else {
        return JSON.parse(data);
    }
}

export default gatdata;