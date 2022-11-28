const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>GOT IT WORKING!</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}
//function default in the default.jsx file has (html) in brackets, why doesnt this?

module.exports = home