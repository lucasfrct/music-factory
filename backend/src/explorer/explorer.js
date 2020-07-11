/*
 * Autor: Lucas Costa
 * Data: Julho de 2020
 * (EXPLORER) Sevidor para ler diretórios e arquivos
 */

const port = 6060

const Exec = require('child_process').exec;
const Express = require('express')
const Explorer = Express()
const Cors = require('cors')()
const Path = require('path')
const Fs = require('fs')
const ImageThumbnail = require('image-thumbnail')

const Drive = { List: DriveList }
const Directory = { List: DirectoryList }

Explorer.use(Cors)
Explorer.use(Express.static(__dirname + '/'))

Explorer.get('/aplication', (req, res)=> {
    res.sendFile(path.join(__dirname+'/index.html'))
})

Explorer.get('/explorer', (req, res)=> {
    
    if("drives" == req.query.path) {
        Drive.List((drives)=> { res.json(drives) })
    }
    
    if("drives" !== req.query.path && ":" == req.query.path.substring(1,2)) {
        filterAudio(req.query.path, (directories)=> { res.json(directories) })
    }

    if("drives" !== req.query.path && ":" !== req.query.path.substring(1,2)) {
        res.json("No valid Directory")
    }
})

Explorer.get('/source', (req, res)=> {

    Fs.readFile(req.query.path, (err, data)=> {
        res.writeHead(200)
        res.end(data);
    });

})

Explorer.get('/thumbnail', async(req, res)=> {

    let options = { percentage: 5 }

    if(req.query.path.length > 3) {
        var thumbnail = await ImageThumbnail(req.query.path, options);
        res.writeHead(200, {'Content-Type': 'image'})
        res.end(thumbnail);
    } else {
        res.json({ path: "no found Image" })
    }

})

Explorer.listen(port)

function isDirectory(path) {
    try {
        var stat = Fs.statSync(path); 
        return stat.isDirectory();
    } catch (e) {
        return false;
    }
}

async function DirectoryList(path, callback) {
    var directories = []
    
    const dir = await Fs.promises.opendir(path);

    for await (const directory of dir) {

        var type = (isDirectory(path+directory.name)) ? "directory" : "file"
        var letter = directory.name.substring(0,1)
        
        if (!(letter == "$" || letter == ".") ) {
            var name = (type == 'directory') ? String(path+directory.name)+'/' : String(path+directory.name)
            directories.push({ name: name, type: type });
        }

    }

    callback(directories)
}

function DriveList(callback) {

    var drives = []

    Exec('wmic logicaldisk get name', (error, stdout, stderr) => {

        list = stdout
            .replace(/Name/g, "")
            .replace(/\r/g, "")
            .replace(/\n/g, "")
            .replace(/ /g, "")
            .trim()
        list = list.split(":")
        
        list.forEach((drive)=> {
            if(drive.length > 0) {
                drives.push({ name: String(drive.trim()+":/"), type: "directory"})
            }
        })

        callback(drives)
    });

    return drives
}

function filterAudio(path, callback) {
    

    Directory.List(path, (directories)=> { 
        
        var dir = directories.filter((directory)=> {
            if(directory.type == "file") {
                if(
                    compare(directory.name.toLowerCase(), ".mp3")
                    || compare(directory.name.toLowerCase(), ".wav")
                    || compare(directory.name.toLowerCase(), ".au")
                    || compare(directory.name.toLowerCase(), ".aac")
                    || compare(directory.name.toLowerCase(), ".ogg")
                    || compare(directory.name.toLowerCase(), ".wma")
                ) {
                    return directory
                }
            }

            if(directory.type == "directory") {
                return directory
            }

            return false
        })

        callback(dir)
    })

}

function compare(name, ext) {
    return (name.indexOf(ext) != -1)
}