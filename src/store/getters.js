const getters = {
    getCollapse: state => {
        if(state.isCollapse) {
            return 1
        } else {
            return 0
        }
    },
}
  
export default getters
  