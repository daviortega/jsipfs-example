'use strict'

const fs = require('fs')

const IPFS = require('ipfs')
const ipfs = new IPFS()


//const readStream = ipfs.files.getReadableStream(location)
ipfs.on('ready', () => {
    console.log('ready')
    ipfs.swarm.addrs((err, peerInfos) => {
        console.log(peerInfos)
    })
    ipfs.swarm.peers((err, peerInfos) => {
        console.log(peerInfos)
    })
    ipfs.version((err, version) => {
        console.log(version)
    })

    const location = '/ipfs/QmPeph5cHyU9TC44RUxVgPKbgEEgT9GUBKnXGwU6aLWzcj/keyimg_yc2015-09-09-98.jpg'
    const lo = '/ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/readme'
    ipfs.files.cat(location, (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log('Got the file')
        fs.writeFileSync('keyimg_yc2015-09-09-98.jpg', data)
    })
})
