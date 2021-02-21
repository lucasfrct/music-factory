/*
 * Autor: Lucas Costa
 * Data: Fev de 2021
 * (EXPLORER) Sevidor para ler diretórios e arquivos
 * # funcões
 * ## arvore de arquivos de 1 nível
 * ## folders de acesso rápido
 * ## numero de item no diretótio
 * ## lista do diretório
 * ## miniatura dos arquivos
 * # formato JSON
 * { drives: [], tree: [], directory: { name: "", path: "", size: "".type: "" } }
 */

const fs = require('fs');
const drivelist = require('drivelist');
const dirTree = require("directory-tree");


const httpServer = require('http').createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.end("")
});

const io = require('socket.io')(httpServer)

const Explorer = {
    drives: [ ]
}

io.on('connection', async socket => {
    
    console.log("Server Connection ID: ", socket.id)

    socket.emit('id', socket.id)


    socket.on ('explorer', async data => {
        let driver = { name: "", size: 0, path: "" }
        const virtualDrives = await drivelist.list();
        let drives = []

        virtualDrives.forEach(drive => {
            drives.push({
                ...driver, 
                name: String(drive.description), 
                size: Number((drive.size / 1073741824).toFixed(2)),
                path: String(drive.mountpoints[0].path)
            })
        })

        Explorer.drives = drives
        console.log("DRIVES: ", Explorer.drives )
    })


    socket.on('explorer', data => {
        console.log("Explorer request tree:", data)
        let tree = dirTree(String(data.path))
        Explorer.tree = tree
        console.log("TREE =======================================", tree, "==================================")
    })

    let counter = 0
    setInterval(()=> {
        socket.emit('explorer', ++counter)
    }, 10000)
})

io.on("disconnect", ()=> {
    console.log("Server Disconect ID", socket.id)
})

httpServer.listen(3000, () => { console.log('Up server :3000') })

