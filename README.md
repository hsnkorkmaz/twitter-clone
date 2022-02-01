# Twitter Clone with React and Tailwind // Uses firestore as a db

![alt text](https://github.com/hsnkorkmaz/twitter-clone/blob/master/twitterscreen1.png?raw=true)

https://hasan.nu/twitter-clone/

https://hsnkorkmaz.github.io/twitter-clone/

Installation

```sh
git clone https://github.com/hsnkorkmaz/twitter-clone.git
cd twitter-clone
npm install
```

Create "firebase.js" file under src folder.
Add your firebase/firestore crediantials according to below template.

```sh
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
```

Run the project
```sh
npm start
```
