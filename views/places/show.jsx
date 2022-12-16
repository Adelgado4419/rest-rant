const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <body>
            <h1>{ data.place.name }</h1>

            <div className="rating">
                <h3>Rating</h3>
            </div>

            <div className="comments">
                <h3>Comments</h3>
            </div>

            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit</a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>     

          </body>
        </Def>
    )
}

module.exports = show
