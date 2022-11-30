const router = require('express').Router()

router.get('/', (req,res) => {
    let places =[
        {
            name: 'Thai',
            city: 'Las Vegas',
            state: 'NV',
            cuisines: 'Thai, Pan-Asian',
            pic: 'http://placekitten.com/100/100',
        },
        {
            name: 'Tacos El Gordo',
            city: 'Las Vegas',
            state: 'NV',
            cuisines: 'Mexican, Authentic Tacos',
            pic: 'http://placekitten.com/100/100',
        }

    ]
    res.render('places/index', {places})
})

  
module.exports = router


// {
//     name: '',
//     city: 'Las Vegas',
//     state: 'NV',
//     cuisines: '',
//     pic: '',
// }