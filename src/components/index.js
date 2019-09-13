import layoutAside from './home/layout-aside.vue'
import layoutHeader from './home/layout-header.vue'
import breadCrumb from './commun/bread-crumb.vue'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import coverImage from './publish/cover-images.vue'
import selectImage from './publish/select-image.vue'

export default {
  install: function (Vue) {
    Vue.component('layout-header', layoutHeader)
    Vue.component('layout-aside', layoutAside)
    Vue.component('bread-crumb', breadCrumb)
    Vue.component('quill-iditor', quillEditor)
    Vue.component('cover-images', coverImage)
    Vue.component('select-image', selectImage)
  }
}
