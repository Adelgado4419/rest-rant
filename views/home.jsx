const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Rest-Rant</h1>
                <div>
                    <img id="homeimage" src='/images/smoothie.jpeg' alt="chia fruit shake"/>
                    <div>
                        Photo by <a href='https://unsplash.com/@cravethebenefits'>Brenda Godinez</a> on <a href='https://unsplash.com/photos/MsTOg6rhRVk'>Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className=' btn btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}
//second button on class name is needed because the newer version of bootstrap require this, always look up documentation
//https://getbootstrap.com/docs/5.0/getting-started/introduction/ 
//function default in the default.jsx file has (html) in brackets, why doesnt this?

module.exports = home

//part 5, when you add information to /new and hit sibmit, the error undefined pic, 