<template>
    <div>
        <Head>
            <Title>Nnew Title here applied | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <h2>Product details</h2>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup> 
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    // fetch the product using id
    const { data: product } = await useFetch(uri, { key: id })

    if(!product.value){
        throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
    }
    definePageMeta({
        layout: 'products'
    }) 


</script>

<!-- <style lang="scss" scoped> -->
<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>