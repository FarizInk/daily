export default defineEventHandler(async (event) => {
  await useStorage().setItem('redis:foo', { hello: 'world' })
  await useStorage().setItem('redis:bar', { hello: 'world' })
  // await useStorage().removeItem('redis:foo')
  const result = await useStorage().getItem('redis:foo')

  const debug = await useStorage().getKeys()

  console.log(debug)
  return result ?? {
    data: null
  }
});
