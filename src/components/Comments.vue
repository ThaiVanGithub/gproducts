<template>
    <section>
        <h2 class="text-center">Bình luận</h2>
        <div class="container-fluid">
            <a-list class="comment-list container" :header="`${comments.length} replies`" item-layout="horizontal"
                :data-source="comments">
                <template #renderItem="{ item, index }">
                    <a-list-item :key="index" class="row my-3">
                        <div class="col-12">
                            <a-comment :author="item.author" :avatar="item.avatar"
                                class="d-flex flex-column flex-md-row align-items-start">
                                <template #actions>
                                    <div class="d-flex flex-wrap gap-2 mt-2 mt-md-0">
                                        <span v-for="(action, actionIndex) in item.actions" :key="actionIndex"
                                            class="text-primary small">
                                            {{ action }}
                                        </span>
                                    </div>
                                </template>

                                <template #content>
                                    <p class="mt-2 mt-md-0">
                                        {{ item.content }}
                                    </p>
                                </template>

                                <template #datetime>
                                    <a-tooltip :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
                                        <span class="text-muted small">{{ item.datetime.fromNow() }}</span>
                                    </a-tooltip>
                                </template>
                            </a-comment>
                        </div>
                    </a-list-item>
                </template>
            </a-list>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import avatarFemale from '@/assets/avatarFemale.jpg'
import avatarMale from '@/assets/avatarMale.jpg'

// Cấu hình dayjs relative time
dayjs.extend(relativeTime)


// Danh sách bình luận
const comments = ref([
    {
        actions: ['Reply to'],
        author: 'Han Solo',
        avatar: avatarFemale,
        content: 'Sản phẩm rất tốt, tôi rất thích, hãy ủng hộ sản phẩm này để bảo vệ môi trường và bảo vệ hành tinh của chúng ta kể cả cả khi không có tôi trên hành tinh này',
        datetime: dayjs().subtract(1, 'days'),
    },
    {
        actions: ['Reply to'],
        author: 'Han Solo',
        avatar: avatarMale,
        content: 'Tôi đã mua vì tôi là người yêu môi trường, tôi đã mua sản phẩm này và rất hài lòng với chất lượng của nó. Hãy ủng hộ sản phẩm này để bảo vệ môi trường',
        datetime: dayjs().subtract(2, 'days'),
    },
])

</script>