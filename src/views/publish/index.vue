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
      <el-form-item label="封面" style="margin-top:150px" prop="cover">
        <el-radio-group @change="changetype" v-model="formData.cover.type">
          <el-radio v-model="radio" :label="1">单图</el-radio>
          <el-radio v-model="radio" :label="3">三图</el-radio>
          <el-radio v-model="radio" :label="0">无图</el-radio>
          <el-radio v-model="radio" :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <cover-images @onselect="selectImg" :images="formData.cover.images"></cover-images>
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
    let func = function (rules, value, callback) {
      if (value.type === 1) {
        (value.type.length === 1 && value.images[0]) ? callback() : callback(new Error('对不起,您未设置单图的封面'))
      } else if (value.type === 3) {
        if (value.type.length === 3 && value.images[0] && value.images[1] && value.images[2]) {
          callback()
        } else {
          callback(new Error('对不起,您未设置三个封面'))
        }
      } else {
        if (value.type.length > 0) {
          callback(new Error('对不起,您设置的封面有误'))
        } else {
          callback()
        }
      }
    }
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
          },
          {
            min: 5,
            max: 30,
            message: '标题长度是5到30之间的数字字母或汉子'
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
        ],
        cover: [{
          validator: func
        }]
      }
    }
  },
  methods: {
    selectImg (url, index) {
      this.formData.cover.images = this.formData.cover.images.map((item, i) => i === index ? url : item)
    },
    changetype () {
      if (this.formData.cover.type === 1) {
        this.formData.cover.images = ['']
      } else if (this.formData.cover.type === 3) {
        this.formData.cover.images = ['', '', '']
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
