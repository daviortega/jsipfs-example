'use strict'

const fs = require('fs')

const ipfsAPI = require('ipfs-api')
const ipfs = new ipfsAPI({host: 'gateway.ipfs.io', port: 443, protocol: 'https'})


//const readStream = ipfs.files.getReadableStream(location)
const location = '/ipfs/QmPeph5cHyU9TC44RUxVgPKbgEEgT9GUBKnXGwU6aLWzcj/keyimg_yc2015-09-09-98.jpg'
const lo = '/ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/readme'
ipfs.files.cat(location, (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log('Got the file')
    fs.writeFileSync('keyimg_yc2015-09-09-98.jpg', data)
})
