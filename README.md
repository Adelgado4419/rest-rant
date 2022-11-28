# Project REST-Rant

REST-Rant is an app where users can review restaurants.


## Inspiration/Begining:

## How to Play/Use:
    Upon first load of the home page site you will have two options. You can view the current restaurants in a list item or add a new location. If you decide to select a location based on the information on the home page, you will be directed to a new site and able to add/edit/delete comments. Similar to the home page, the nav bar will continue to have the Home | New Site options available. 
## Isuses I faced:


## Oustanding Bugs:


## Features I would like to add:


## Previous Projects

## Sources I used

https://coolors.co/ 

   Hex Codes            RGB
: 353535 Jet Black      53, 53, 53
: 3C6E71 Ming           60, 110, 113
: FFFFFF White          255, 255, 255
: D9D9D9 Gainsboro      217, 217, 217
: 284B63 Indigo Dye     40, 75, 99

Project notes:

As an avid resturant go-er, I find need an application that allows me to easily view reviews, and make a judgement to ensure on a locaton to ensure I have an enjoyable meal. 

## Routes:


| METHOD    |    PATH   |        PURPOSE  |
|:---------:| :------:          |:-------:  |
|   GET     |  /                |HOME PAGE|
| GET       |/places            | Places index page|
| POST      |/places            |Create new place|
| GET       |/places/new        |Form page for creating a new place|
| GET       |/places/:id        |Details about a particular place|
| PUT       |/places/:id        |Update a particular place|
| GET       |/places/:id/edit   |Form page for editing an existing place|
| DELETE    |/places/:id        |Delete a particular place|
|POST       |/places/:id/rant   |Create a rant (comment) about a particular place|
|DELETE     |/places:id/rant/randid     |Delete a rant (comment) about a particular place|
|GET        |*                   |404 page (matches any route not defined above)|

shoutout to this site for helping to create the table
https://www.markdownguide.org/extended-syntax/#tables


## Data

places

| Field    |    Type   |
|:---------:| :------:     |
|   _id     |  object ID  |
| name      |string | 
| city      |string   |
| state      |string  |
| cruisines  |string  |
| pic        |string  |



rants

| Field    |    Type   |
|:---------:| :------:          |
|   _id     |  object ID
| place_id   |  ref(places Object_ID)
| rant    |Boolean         |
| rating     |number     |
| comment     |string      |
| reviewer        |string   |



https://github.com/HackerUSA-CE/API-Project-REST-Rant/blob/master/README.md