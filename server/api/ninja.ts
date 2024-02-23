export default defineEventHandler(async(event) => {
    // handle query params
    // Used getQuery instead of useQuery
    const { name } = getQuery(event)

    //useBody is now deprecated and it is replaced with readBody
    // const { age } = await readBody(event)
    // const { address } = await readBody(event)
    
    // return {
    //     message: `Hello, ${name}! You are ${age} years old. You are from ${address}`
    // }

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_EPCs7bJjUaRVzdJ5lrYclx1lO3AMu3izQRmrcoE6') 
    
    return data 
})