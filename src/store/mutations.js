const mutations = {
    changeCollapse(state, status){
        state.isCollapse = status
    },
    changeLoading(state, status){
        state.isLoading = status
    }
}

export default mutations