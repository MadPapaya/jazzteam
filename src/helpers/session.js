export function checkCredentials(params) {
  if (
    params.username !== 'Admin' ||
    params.password !== '12345678'
  ) {
    return false
  }
  return true
}
