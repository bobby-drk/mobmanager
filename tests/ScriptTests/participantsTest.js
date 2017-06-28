import test from 'ava'
import Vue from 'vue/dist/vue.js'
import * as mutations  from '../../resources/assets/js/store/mutations'
// import { participantsSync } from '../../resources/assets/js/store/mutations'
// import from './mutations'



test('that a participant can be added', t => {

    //arrange
    const state = { participants: [] }

    //act
    mutations.participantAdd(state,
        {
            name: 'Clark',
            contributor: true,
            active: false
        }
    )

    //assert
    t.is(state.participants.length, 1)

})

test('participant object can be synced', t => {

    // //arrange
    const state = { participants: [] }
    let participantObject = [
        { name: 'Clark', contributor: true, active: true  },
        { name: 'Bruce', contributor: true, active: false }
    ]

    // //act
    mutations.participantsSync(state, participantObject)

    // //assert
    t.deepEqual(state.participants, participantObject)

})


test('a participant contributor can be toggled', t => {

    // //arrange
    const state = { participants: [
        {
            name: 'Clark',
            contributor: true,
            active: false
        }
    ] }


    // //act
    mutations.participantsSetContributor(state,         {
            name: 'Clark',
            contributor: true,
            active: false
    })
console.log(state);

    // //assert
    t.deepEqual(state.participants, {
            name: 'Clark',
            contributor: false, // Now false
            active: false
    })

});
