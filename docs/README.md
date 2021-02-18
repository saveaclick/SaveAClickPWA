### PWA Fire App

Before we get started; let us make sure everything is ready and we have all tools needed.

#### [What you should already know]()

    - Basic HTML, CSS, and JavaScript (ofcourse you are)
    - How to run commands from the command line
    - Some familiarity with service workers is recommended
    - Familiarity with Node.js is recommended
 
 **NOTE** All the code is commented BTW; Read through to understand each line. It is good to do so!

#### [What you will need]()

[PWA Fire App](https://pwafire.org/developer/app) requires Node.js. [Install](https://nodejs.org/en/) the latest long term support (LTS)  version if you have not already.

Make sure you have all this checked before we start;

  - Connection to the internet
  - A browser that [supports service worker](https://pwafire.org/developer/tools/browser-test/)
  - A text editor; like [VS Code](https://code.visualstudio.com/)
  - [Node.js](https://nodejs.org/en/) installed
  - [Firebase](https://pwafire.org/developer/codelabs/firebase-hosting-web/) if you need to deploy it
  
#### [Get the app](https://github.com/mayeedwin/pwafireapp/archive/master.zip)

The important directory for our web app is going to be the **src** folder in which you will place all of your project files or start your new progressive web app project from.

Download [PWA Fire App here](https://github.com/mayeedwin/pwafireapp/archive/master.zip)

#### [Install project dependencies and start the server]()

 1. Navigate to the app directory via the command line:

        cd pwafireapp-master
        cd app
     
 2. Run the following commands to install the project dependencies:

        npm install
        
 3. Then build and serve the app with these commands:

        npm run build
        npm run start
        
The *npm install* command installs the project dependencies based on the configuration in **package.json.** Open **../app/package.json** and examine its contents. Get the [explanation here](https://pwafire.org/developer/pwa/started/#sw-config-for-node)

<p><b>NOTE : </b>Checkout for the latest <b>workbox</b> <a href="https://developers.google.com/web/tools/workbox/guides/get-started#importing_workbox" target="_blank" rel="noopener">release here</a> and update the <b>importScripts</b> below say <b>3.6.1</b> to <b>3.6.2</b> if it's available and update the <b>service-worker.js</b> file in the <b>src</b> folder.</p>

Once you have started the server, open the browser and navigate to http://localhost:8081/ to view the app. The app is a simple one page progressive web app which just showcases a working PWA Fire App.

#### [Add your project source files or start a new project]()

Open the **src** folder in your text editor. The **src** folder is where you will be building your progressive web app or copy all your projects source files as in the app structure.

Find demo [PWA Fire App here](https://pwafireapp.firebaseapp.com)

 1. Add or create your source files as in the **app structure** shown below. For example, you will place all **.css** files in the **css** folder.

```bash

│   ├── src
│       ├── assets
|          ├── css
|          ├── js
|          ├── scss
│       ├── images
|          ├── icons
|          ├── others
|       ├── pages
│       ├── index.html
│       ├── app.webmanifest
│       ├── service-worker.js

```

 2. For the **images** folder, make sure you have all your app icons in your project as shown below and copy all images to it; The **icons** should be of sizes as in the **app.webmanifest** file. Atleast have an icon size of 144x144 is required for our progressive web app to install.

 3. **Generate** your progressive [web app icons here](https://app-manifest.firebaseapp.com/). Unzip the icons and copy them to the **icons** folder of the [PWA Fire App](https://pwafire.org/developer/app). Open **app.webmanifest** and configure your web app name, short name and theme color **(must be the same as specified in the *index.html*).**

 4. For the **others** folder; You could rename it to say **team** and add images to it but make sure to update that in the **service-worker.js** as shown below; Just an example of extra folders you may want to add to your project or your project has.

```javascript

   /*  cache images in the e.g others folder; edit to other folders you got 
   and config in the sw-config.js file
    */
   workbox.routing.registerRoute(
    /(.*)others(.*)\.(?:png|gif|jpg)/,
    workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );

```

5. To make your progressive web app more discoverable and your pages built with best web practices, configure your pages as in the **head** tag of the default **index.html** in the **src** folder.

### [Build your progressive web app]()

After configuring your project to the app structure above; let us build and even deploy it!
Then build and serve the app with these commands:

        npm run build
        npm run start
        
The web app files are copied over to the **build** folder when the **npm run build** command is run, and the server (is started with **npm run start**) serves these files from the **build** directory.

**Alternatively**, you can test your web app by running `firebase serve` in the app root folder and host with [firebase](https://firebase.google.com/docs/web/setup) as in [this codelab](https://pwafire.org/developer/codelabs/firebase-hosting-web/).

You are done! Welcome to PWAs World!

### [Engage us](https://twitter.com/pwafire)
Donate a star, like, follow and contribute in any way. You got any **bug?** Report it [here for support.](https://github.com/mayeedwin/pwafireapp/issues/new) You want to contribute? Create your [feature here.](https://github.com/mayeedwin/pwafireapp/issues/new)
