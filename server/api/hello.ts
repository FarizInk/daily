export default defineEventHandler(async (event) => {
  await useStorage('db').setItem('redis:foo', { hello: 'world' })
  await useStorage('db').setItem('redis:bar', { hello: 'world' })
  // await useStorage('db').removeItem('redis:foo')
  const result = await useStorage('db').getItem('redis:foo')

  const debug = await useStorage('db').getKeys()

  console.log(debug)
  return result ?? {
    data: null
  }
});
