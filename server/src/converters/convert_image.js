import sharp from 'sharp';

/**
 * @param {Buffer} buffer
 * @param {object} options
 * @param {number} [options.extension]
 * @param {number} [options.height]
 * @param {number} [options.width]
 * @returns {Promise<Uint8Array>}
 */
async function convertImage(buffer, options) {
  const size = options.height === undefined && options.width === undefined
    ? { height: 300 }
    : { height: options.height, width: options.width }

  return sharp(buffer)
    .resize({
      fit: 'cover',
      ...size,
    })
    .toFormat(options.extension ?? 'jpeg')
    .toBuffer();
}

export { convertImage };
