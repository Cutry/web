import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

var router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: {
                name: "Login"
            },
            component: () => {
                return import("@/pages/Page");
            },
            children: [
                {
                    name: "IndexEnter",
                    path: "index",
                    title: "首页",
                    redirect: {
                        name: "SelectModule"
                    },
                    component: () => {
                        return import("@/pages/IndexEnter");
                    },
                    children: [
                        {
                            name: "SelectModule",
                            path: "selectModule",
                            meta: {
                                login: true,
                                title: "首页",
                                authorize: false
                            },
                            component: () => {
                                return import("@/pages/index/SelectModule");
                            }
                        },
                        {
                            name: "SearchList",
                            path: "searchList",
                            meta: {
                                login: true,
                                title: "信用查询",
                                authorize: false
                            },
                            component: () => {
                                return import("@/pages/index/SearchList");
                            }
                        }
                    ]
                },
                {
                    name: "XYPT",
                    path: "crm",
                    meta: {
                        title: "信用工作平台"
                    },
                    redirect: {
                        name: "XyptHome"
                    },
                    component: () => {
                        return import("@/pages/CrmEnter");
                    },
                    children: [
                        {
                            name: "XyptHome",
                            path: "xyptHome",
                            component: () => {
                                return import("@/pages/Home");
                            }
                        },
                        {
                            name: "sm_login_manage",
                            path: "sm_login_manage",
                            meta: {
                                title: "登录页管理",
                                login: true,
                                authorize: true
                            },
                            component: () => {
                                return import("@/pages/setting/LoginManage");
                            }
                        },
                        {
                            name: "sm_index_manage",
                            path: "sm_index_manage",
                            meta: {
                                title: "首页管理",
                                login: true,
                                authorize: true
                            },
                            component: () => {
                                return import("@/pages/setting/IndexManage");
                            }
                        },
                        {
                            name: "sm_menu_manage",
                            path: "sm_menu_manage",
                            meta: {
                                title: "菜单栏管理",
                                login: true,
                                authorize: true
                            },
                            component: () => {
                                return import("@/pages/setting/MenuManage");
                            }
                        },
                        {
                            name: "sm_work_manage",
                            path: "sm_work_manage",
                            meta: {
                                title: "工作页管理",
                                login: true,
                                authorize: true
                            },
                            component: () => {
                                return import("@/pages/setting/WorkManage");
                            }
                        },
                        {
                            name: "sm_copyright_manage",
                            path: "sm_copyright_manage",
                            meta: {
                                title: "版权信息管理",
                                login: true,
                                authorize: true
                            },
                            component: () => {
                                return import("@/pages/setting/CopyrightManage");
                            }
                        },
                        {
                            name: "om_region_manage",
                            path: "om_region_manage",
                            meta: {
                                title: "行政区管理",
                                login: true,
                                authorize: true
                            },
                            component: () => {
                                return import("@/pages/yhgl/RegionManage");
                            }
                        },
                        {
                            name: "om_role_manage",
                            path: "om_role_manage",
                            meta: {
                                title: "角色管理",
                                login: true,
                                authorize: true
                            },
                            component: () => {
                                return import("@/pages/yhgl/RoleManage");
                            }
                        },
                        {
                            name: "om_org_manage",
                            path: "om_org_manage",
                            meta: {
                                title: "单位管理",
                                login: true,
                                authorize: true
                            },
                            component: () => {
                                return import("@/pages/yhgl/OrgManage");
                            }
                        },
                        {
                            name: "om_user_manage",
                            path: "om_user_manage",
                            meta: {
                                title: "用户管理",
                                login: true,
                                authorize: true
                            },
                            component: () => {
                                return import("@/pages/yhgl/UserManage");
                            }
                        },
                        {
                            name: "om_auth_manage",
                            path: "om_auth_manage",
                            meta: {
                                title: "权限管理",
                                login: true,
                                authorize: true
                            },
                            component: () => {
                                return import("@/pages/yhgl/AuthManage");
                            }
                        },
                        {
                            name: "om_api_manage",
                            path: "om_api_manage",
                            meta: {
                                title: "接口用户管理",
                                login: true,
                                authorize: true
                            },
                            component: () => {
                                return import("@/pages/yhgl/ApiManage");
                            }
                        },
                        {
                            name: "om_log_manage",
                            path: "om_log_manage",
                            meta: {
                                title: "用户日志",
                                login: true,
                                authorize: true
                            },
                            component: () => {
                                return import("@/pages/yhgl/LogManage");
                            }
                        },
                        {
                            name: "sm_company_manage",
                            path: "sm_company_manage",
                            meta: {
                                title: "用信单位管理",
                                login: true,
                                authorize: false
                            },
                            component: () => {
                                return import("@/pages/yxdw/YxdwManage");
                            }
                        },
                        {
                            name: "authority",
                            path: "authority",
                            meta: {
                                title: "没有权限，请联系管理员",
                                login: false,
                                authorize: false
                            },
                            component: () => {
                                return import("@/pages/Authority.vue");
                            }
                        },
                        {
                            name: "new",
                            path: "new/page/*",
                            meta: {
                                login: true,
                                authorize: true
                            },
                            component: () => {
                                return import("@/pages/NewPage");
                            }
                        },
                    ]
                }
            ]
        },
        {
            name: "Login",
            path: "/login",
            meta: {
                title: "登录",
                login: false,
                authorize: false
            },
            component: () => {
                return import("@/pages/Login.vue");
            }
        },
        {
            name: "Err404",
            path: "*",
            meta: {
                title: "没有找到页面",
                login: false,
                authorize: false
            },
            component: () => {
                return import("@/Err404");
            }
        }
    ]
});

export default router;
