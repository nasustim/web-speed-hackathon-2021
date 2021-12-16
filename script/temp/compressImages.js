const glob = require('glob')
const path = require('path')

const sharp = require('sharp')
sharp.cache(false)

glob('public/images/**/*.jpg', {
  cwd: path.resolve(__dirname, '../../')
}, (err, files) => {
  files.forEach(async (file) => {
    const _file = path.resolve(__dirname, '../../', file)
    const buf = await sharp(_file)
      .webp({
        nearLossless: true
      })
      .resize(500, 500, {
        fit: 'outside'
      })
      .toBuffer()
    
    sharp(buf).toFile(_file.replace('\.jpg', '\.webp'))
  })
})
