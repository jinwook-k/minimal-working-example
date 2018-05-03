fetch('add.wasm')
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, {}))
    .then(results => {
        alert(results.instance.exports.add_one(41));
    });