<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">发布文章</template>
    </bread-crumb>
    <el-form
      ref="publishform"
      :model="formData"
      :rules="publishRules"
      style="margin-left:100px"
      label-width="100px"
    >
      <el-form-item prop="title" label="标题">
        <el-input v-model="formData.title" style="width:450px"></el-input>
      </el-form-item>
      <el-form-item prop="content" label="内容">
        <quill-iditor v-model="formData.content" style="height:200px;width:700px"></quill-iditor>
      </el-form-item>
      <el-form-item label="封面" style="margin-top:150px">
        <el-radio-group @change="changetype" v-model="formData.cover.type">
          <el-radio v-model="radio" :label="1">单图</el-radio>
          <el-radio v-model="radio" :label="3">三图</el-radio>
          <el-radio v-model="radio" :label="0">无图</el-radio>
          <el-radio v-model="radio" :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="channel_id" label="频道">
        <el-select v-model="formData.channel_id" placeholder="请选择">
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="publish(false)" type="primary">发布文章</el-button>
        <el-button @click="publish(true)">存入草稿</el-button>
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
        title: [
          {
            required: true,
            message: '标题不能为空'
          }
        ],
        content: [
          {
            required: true,
            message: '内容不能为空'
          }
        ],
        channel_id: [
          {
            required: true,
            message: '频道不能为空'
          }
        ]
      }
    }
  },
  methods: {
    changetype () {
      if (this.formData.cover.type === 1) {
        this.formData.cover.images = ['http://toutiao.meiduo.site/FpRjG_1Ge-e-smOgynojWwBoMX22']
      } else if (this.formData.cover.type === 3) {
        this.formData.cover.images = ['http://toutiao.meiduo.site/FpRjG_1Ge-e-smOgynojWwBoMX22', 'http://toutiao.meiduo.site/FpRjG_1Ge-e-smOgynojWwBoMX22', 'http://toutiao.meiduo.site/FpRjG_1Ge-e-smOgynojWwBoMX22']
      } else {
        this.formData.cover.images = []
      }
    },
    publish (draft) {
      this.$refs.publishform.validate(isOk => {
        if (isOk) {
          let { articleId } = this.$route.params
          this.$axios({
            url: articleId ? `/articles/${articleId}` : '/articles',
            method: articleId ? 'put' : 'post',
            params: { draft },
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
