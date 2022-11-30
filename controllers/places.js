const router = require('express').Router()


router.get('/new', (req, res) => {
    res.render('places/new')
  })


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

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


module.exports = router


// {
//     name: '',
//     city: 'Las Vegas',
//     state: 'NV',
//     cuisines: '',
//     pic: '',
// }