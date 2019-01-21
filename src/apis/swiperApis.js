import {swiperAjaXurl} from '../commons/AjaxURL'

export default {
  /**
   * 获取首页轮播图图片数据
   * @param calb 返回的数据
   */
  getSliderImg(calb){
    fetch(swiperAjaXurl).then(res=> {
      res.json().then(data => {
        calb(data)
      })
    })
  },
}
