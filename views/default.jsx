const React = require('react')

function Def (html) {
    return ( <html>
            <head>
                <title>Rest-Rant</title>
                <link 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
                rel="stylesheet" 
                integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
                crossOrigin="anonymous"/>
                <link rel="stylesheet" href='/css/style.css'/>
            </head>
            <body>
                {html.children}

            </body>
        </html>
    )
}

module.exports = Def
// UNABLE TO GET BOOTSRAP WORKING, ASK INSTRUCTOR MONDAY NOV 28

