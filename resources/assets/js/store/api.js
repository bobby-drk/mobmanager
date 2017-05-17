export default {

    createRecord (name, assembled, created, failed, loader) {

        loader(true)
        axios.post('/api/mob', {
            'name': name,
            'storage': assembled,
        })
        .then(({ data }) => {
            created(data)
        })
        .catch((_response) => {
            console.log("create Failed");

            failed()
        }).then(() => {
            loader(false)
        })

    },

    saveRecord (slug, assembled, failed, loader) {

        loader(true)
        axios.put('api/mob/' + slug, {
            'storage': assembled,
        })
        .then(({ data }) => {
            console.log("worked");

        })
        .catch((_response) => {
            console.log("save Failed");
            failed()
        }).then(() => {
            loader(false)
        })

    }



}
