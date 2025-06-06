function tes(){
    return Promise.resolve('wawa');
}

// kalau file .mjs boleh diluar function
    const result = await tes();
    console.info(result);