<template>
    <div class="pdf">
        <div>pdfpdfpdf</div>
        <pdf src="../../../static/pdfa.pdf"></pdf>
        <div>
            <button @click="downfile()">打开pdf</button>
            <a href="../../../static/pdfa.pdf">aaaaa</a>
        </div>
    </div>
</template>
<script>
    import pdf from 'vue-pdf'

    export default {
        components: {
            pdf
        },
        methods:{
            downfile(){
                window.open('../../../static/pdfa.pdf')
            }
        }
    }
</script>
<style>

</style>
