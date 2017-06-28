import test from 'ava'
import Vue from 'vue/dist/vue.js'
import { participantAdd } from '../../resources/assets/js/store/mutations'
import { participantsSync } from '../../resources/assets/js/store/mutations'



test('that a participant can be added', t => {

    //arrange
    const state = { participants: [] }

    //act
    participantAdd(state,
        {
            name: 'Charlie',
            contributor: true,
            active: false
        }
    )

    //assert
    t.is(state.participants.length, 1)

})


test('participant object can be synced', t => {

    // //arrange
    // const state = { participants: [] }

    // //act
    // participantAdd(state,
    //     {
    //         name: 'Charlie',
    //         contributor: true,
    //         active: false
    //     }
    // )

    // //assert
    // t.is(state.participants.length, 1)

});
