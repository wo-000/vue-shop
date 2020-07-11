export default{
  collectsData(state, payload) {
    if (payload.isCol) {
      state.collectDatas.push(payload);
    } else {
      console.log(payload, payload.shopId);
      state.collectDatas.forEach((item, index) => {
        if (item.shopId == payload.shopId) {
          state.collectDatas.splice(index, 1);
        }
      });
    }
  },
  buyDatas(state, payload) {
    console.log(payload);
    if (state.buyDatas.length > 0) {
      let obj = state.buyDatas.find(item => {
        return item.shopId == payload.shopId;
      });
      if (obj) {
        obj.count++;
      } else {
        state.buyDatas.push(payload);
      }
    } else {
      state.buyDatas.push(payload);
    }
    console.log(state.buyDatas);
  }
}