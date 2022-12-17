const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating = (
        <h3 className="inactive">
          Not yet rated
        </h3>
      )
      if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = sumRatings / data.place.comments.length
        rating = (
          <h3>
           {Math.round(averageRating)} stars
          </h3>
        )}
      
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <div className='row'>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt={data.place.name} />
            <h2>Rating</h2>
                {rating}
            <p>Not Rated</p>
            <h2>Description</h2>
            <p>Located in {data.place.city}, {data.place.state} serving {data.place.cuisines}</p>


            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>     
            
            </div>
            <h2>Comments</h2>
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className='col'>
                              {comments}
                              </div>
                            </div>
                        </div>
               
                <h2>Got your own Rant or Rave?</h2>
                <form action={`/places/${data.place.id}/comment`} method='POST'>
                <div className= "container text-center">
                    <div className='row align-items-start'>
                        <div className='col'>
                            <label htmlFor='content'>Content</label>
                            <textarea id='content' name='content' className='form-control'></textarea>
                        </div>
                    </div>
                    <div className='row'>
                        <div>
                            <label htmlFor='author'>Author  </label>
                            <input id='author' name='author' />
                        </div>
                        <div>
                            <label htmlFor='stars' className='col'>Star Rating</label>
                            <input type='range' step='0.5' min='1' max='5' id='stars' name='stars' list='tickmarks' />
                            <datalist id='tickmarks'>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </datalist>
                        </div>
                        <div className='col'>
                            <label htmlFor='rant'>Rant?  </label>
                            <input type='checkbox' id='rant' name='rant' />
                        </div>
                    </div>
                    </div>
                    <input type='submit' className='btn btn-primary' value='Add Comment' />
                </form>
          </main>
        </Def>
    )
}

module.exports = show


