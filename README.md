# fist-deks-app
Fist Dekstop Apss with Electron JS, Packaging and Distributing app with Electron Forge.

# how to use deks app
1. Open your terminal & then clone this repository
    ```
    git clone https://github.com/jokosaputro95/first-deks-app.git
    ```
2. Open this repo using your favorite text editor
3. create & save .env file in `./src` directory
    ```.env setup
    # DATABASE SETUP
    DBHOST: 'localhost'
    DBUSER: 'your user'
    DBPASSWORD: 'your password'
    DBNAME: 'electron_crud'
    DBPORT: 3306
    ```
4. Find file electron_crud.sql in the repo & copy sql syntax for databases setup
    ```
    ./src
        --- databases
            --- electron_crud.sql
    ```

    ```setup grants user
    GRANT ALL ON electron_crud.* TO '<users>'@'localhost';
    ```
4. After completing the database configuration
5. packaging this repo to installer.
    `npm run make`