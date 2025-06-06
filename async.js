function tes(){
    return Promise.resolve('wawa');
}

// kalau file .js harus didalam function
async function tesAsync() {
    const result = await tes();
    return result;
}