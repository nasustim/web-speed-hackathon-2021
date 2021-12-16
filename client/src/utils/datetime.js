export const toISOString = (dtString) => (new Date(dtString)).toISOString()
export const toLLString = (dtString) => {
  const dt = new Date(dtString)
  return `${dt.getFullYear()}年${dt.getMonth() + 1}月${dt.getDate()}日`;
}