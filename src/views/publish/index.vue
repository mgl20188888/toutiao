<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">发布文章</template>
    </bread-crumb>
    <el-form ref="publishform" :model="formData" :rules="publishRules" style="margin-left:100px" label-width="100px">
      <el-form-item prop="title" label="标题">
        <el-input v-model="formData.title" style="width:450px"></el-input>
      </el-form-item>
      <el-form-item prop="content" label="内容">
        <el-input v-model="formData.content" type="textarea" :rows="4" style="width:700px"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group v-model="formData.cover.type">
          <el-radio v-model="radio" :label="1">单图</el-radio>
          <el-radio v-model="radio" :label="3">三图</el-radio>
          <el-radio v-model="radio" :label="0">无图</el-radio>
          <el-radio v-model="radio" :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="channel_id" label="频道">
        <el-select v-model="formData.channel_id" placeholder="请选择">
          <el-option
            v-for="item in channels"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="publish" type="primary">发布文章</el-button>
        <el-button>存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {

      channels: [],
      formData: {
        title: '',
        content: '',
        cover: {
          type: 0,
          images: []

        },
        channel_id: null
      },
      publishRules: {
        title: [{
          required: true,
          message: '标题不能为空'
        }],
        content: [{
          required: true,
          message: '内容不能为空'
        }],
        channel_id: [{
          required: true,
          message: '频道不能为空'
        }]
      }
    }
  },
  methods: {
    publish () {
      this.$refs.publishform.validate((isOk) => {
        if (isOk) {
          this.$axios({
            url: '/articles',
            method: 'post',
            params: { darft: false },
            data: this.formData
          }).then(() => {
            this.$router.push('/home/articles')
          })
        }
      })
    },
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    },
    getArticleById (articleId) {
      this.$axios({
        url: `/articles/${articleId}`
      }).then(result => {
        this.formData = result.data
      })
    }
  },
  created () {
    this.getChannels()
    let { articleId } = this.$route.params
    if (articleId) {
      this.getArticleById(articleId)
    }
  }
}
</script>

<style>
</style>
