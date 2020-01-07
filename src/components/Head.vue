<template>
    <div id="head">
        <div class="wrap clearfix">
            <div class="navbar-header fl">
                <a class="navbar-brand" href="#"
                    ><img
                        v-if="indexHeadLogo.value"
                        :src="'/img/' + indexHeadLogo.value"
                        class="logo-img"
                /></a>
            </div>
            <div class="fr clearfix nav-right">
                <span style="font-size: 14px">
                    <img
                        style="width: 24px;margin-top: -4px;"
                        :src="require('../assets/images/user_default.png')"
                        alt=""
                    />
                    {{ accountInfo.name }}
                </span>
                <a class="nav-right-item" href="javascript:;" @click="out">
                    退出
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { loginOut } from "@/api/user";
export default {
    name: "Head",
    computed: {
        indexHeadLogo: function() {
            return this.$store.getters.indexHeadLogo;
        },
        accountInfo: function() {
            return this.$store.state.account;
        }
    },
    data() {
        return {
            status: true,
            headImg:
                "https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_handsome.jpg"
        };
    },
    methods: {
        out() {
            loginOut().then(res => {
                this.$ajaxAfter(res).then(() => {
                    this.$store.commit("clearAccount");
                    this.$router.replace({
                        name: "Login"
                    });
                });
            });
        }
    }
};
</script>

<style scoped>
#head {
    height: 80px;
}
#head .wrap {
    line-height: 80px;
}
.nav-right .nav-right-item {
    margin: 0 10px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
}
.logo-img {
    max-height: 40px;
}
</style>
