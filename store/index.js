export const state =() => ({
    listImages:[]
})

export const getters = {
    ListImagesFilterType: (state) => (type)=>{
        if(!type || typeof type === "undefined" || typeof type !== "number") return state.listImages

        if(type % 2 == 0) 
            return state.listImages.filter(x => x.id % 2 == 0)

        return state.listImages.filter(x => x.id % 2 != 0)

    }
}

export const actions = {
    async GetImages({commit}){
        try{
            await this.$axios.get('/albums/1/photos')
            .then(res => {
                commit("setListImages",res.data)
                console.log("🚀 ~ file: index.js ~ line 23 ~ GetImages ~ res.data", res.data)
            })
            .catch(er=>{
                alert(er.toString())
            })
        }catch(error){
        console.log("🚀 ~ file: index.js ~ line 28 ~ GetImages ~ error", error.toString())
            
        }
    }
}

export const mutations = {
    setListImages(state,imagesData){
        state.listImages = imagesData
    }
}