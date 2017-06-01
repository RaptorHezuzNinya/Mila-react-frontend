export const LOADING_CONTACTS = 'LOADING_CONTACTS'
export const LOADING_CONTACTS_DONE = 'LOADING_CONTACTS_DONE'

export default (loading) => {
  const type = loading ? LOADING_CONTACTS : LOADING_CONTACTS_DONE
  return { type }
}
