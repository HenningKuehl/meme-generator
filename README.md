# Meme Generator

Fullstack Developer Challenge during application process for [New Monday](https://www.newmonday.co/).

## Development
Run `ng serve` to access development version on `http://localhost:4200`.

Run `ng build -c production` to build project.

## Documentation

### Technology Stack

 - [Angular](https://angular.io)
   - [Angular Material](https://material.angular.io/)
   - [Angular Flex Layout](https://github.com/angular/flex-layout)
   - [Ngrx State Management](https://ngrx.io/)
 - [Firebase](https://firebase.google.com/)
   - [Hosting](https://firebase.google.com/products/hosting)
   - _[Firestore](https://firebase.google.com/products/firestore) (Future)_
   - _[Authentication](https://firebase.google.com/products/auth) (Future)_
   - _[Storage](https://firebase.google.com/products/storage) (Future)_

### Frontend Framework
I decided to use Angular because this is my favourite framework.
And I have the best knowledge to build easy and fast a good single page application.

To have from the start a good UI, I used Angular Material.
With this library it's very easy to build a good-looking web app.

For a good and responsive layout I used Angular Flex Layout.
It's a helper to use flex layout with Angular.

To set a good basic for future features I installed ngrx to use it for state management.
Especially for features like the gallery 
and managing personal memes it's a big advantage to have a good state management.

### Backend Framework
Due to not enough time I didn't build a backend.
But I would choose to write simple Firebase Functions with Node.js and TypeScript.
Most of the use cases can be handled direct via the web app and Firebase. 
And for all other use cases are microservices a good solution.

The first function I want to write would be the applying of captions for the meme.
I would not recommend to make this api all direct from the web app,
because the username and the password are required.
I would store the credentials in the Google Cloud Secret Manager
and access them in the backend to have a high security standard.

### Database
For the database I would choose Firestore,
because it's very easy to access in the web app
and for most of the use cases I don't need to access a backend.
I think that is very good for smaller applications like this one,
but is also very good for scaling if the app grows in the future.

The database would be secured with the Firestore rules
and authenticated with Firebase Authentication.

### Architecture

#### Folder Structure

For every area I create an own folder like `/memes` or maybe `/account` in the future.
In these folders I always use the same structure:

 - `/data-access` - For handling all data stuff like state management and services.
 - `/features` - Separate folders for every page. Each page gets also an own module.
 - `/ui` - Ui components which are used in the feature pages. Every Ui component is a standalone component.

The `/shared` folder has the same structure 
and is for stuff that used from all areas.

#### General
In general, I would access the database direct via the web app to firebase.
Also, the authentication.
For some further features like the meme captioning I would call a Firebase function.

### Delivery
The web app is available on [https://nm-memegen.web.app/](https://nm-memegen.web.app/).
The code is hosted with Firebase Hosting.
