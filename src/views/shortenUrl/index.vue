<template>
    <header>
        <span>Dev projects&nbsp;-&nbsp;</span>
        <el-link
            href="https://www.codementor.io/projects/web/link-shortener-website-brqjanf6zq"
            type="primary"
            target="_blank"
        >
            Link shortener website
        </el-link>
    </header>
    <div class="shortenPage">
        <el-form class="demo-form-inline" label-width="108px">
            <el-form-item label="A Full Url">
                <el-input placeholder="Please enter Url" v-model="originalUrl" style="width: 216px" clearable />
            </el-form-item>
            <el-form-item label="Shorten Url">
                <el-text class="mx-1" type="primary" @click="shortenUrlHandle" >{{ shortenUrl }}</el-text>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="shortenUrlHandle">shorten</el-button>
                <el-button class="copy" type="primary" :data-clipboard-text="shortenUrl" @click="copyUrlHandle">copy</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">

    import { ElMessage } from 'element-plus'
    import { ref } from 'vue'

    import Clipboard from "clipboard"

    let originalUrl = ref<String>("https://baidu.com?a=1&b=2");
    let shortenUrl = ref<String>("");

    const shortenUrlRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im;

    const shortenUrlHandle = () => {
        const url = originalUrl.value
        const domain = url && url.match(shortenUrlRegex)?.[1]
        shortenUrl.value = domain || "";
    }

    const copyUrlHandle = () => {
        if(shortenUrl.value) {
            
            let clipboard = new Clipboard('.copy');

            clipboard.on('success', function(e) {
                ElMessage({
                    message: 'Copied success.',
                    type: 'success',
                })
                e.clearSelection();
                clipboard.destroy();
            });

            clipboard.on('error', function(e) {
                console.error('Action:', e.action);
                console.error('Trigger:', e.trigger);
                clipboard.destroy();
                ElMessage.error('Copied failed.')
            });

        } else {
            ElMessage.error('There is nothing could copy.')
        }
    }

    // const jumpTo = 


</script>

<style scoped>
    header {
        margin-bottom: 24px;
    }
</style>
