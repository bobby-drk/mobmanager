export default {

    createRecord (name, assembled, created, failed) {

        axios.post('/api/mob', {
            'name': name,
            'storage': assembled,
        }).then(({ data }) => {

            console.log("IN APi", data);

            created(data)


        })
        // .catch((_response) => {
        //     // console.log("Error")
        //     failed()
        // }).then(() => {
        //     console.log("turn off loader");
        // })

    }


}
