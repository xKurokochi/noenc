const { fetchJson, fetchText } = require('../lib/fetcher')
const fetch = require('node-fetch')


const asupan = () => new Promise((resolve, reject) => {
    console.log('Fetching video...')
    fetchText('http://sansekai.my.id/sansekai.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Random dadu for group game xD
 * @returns {String}
 */
const dadu = () => new Promise((resolve, reject) => {
    console.log('Get sticker....')
    fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/Dadu')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Remove image background.
 * @param {string} query
 * @returns {Promise<object>}
 */
const stickernobg = (query) => new Promise((resolve, reject) => {
    console.log('Converting sticker no bg...')
    fetchJson(`https://api.vhtear.com/removebgwithurl?link=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


module.exports = {
	dadu,
	asupan,
	stickernobg
}
