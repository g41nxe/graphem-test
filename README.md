# Simple Local Laravel + Vue.js Application
with docker, nginx and mysql

## Prequisites

1. Make sure you have [Docker](https://docs.docker.com/docker-for-windows/install/) installed
2. Install **MySQL-Connector**, **PHP**, **Composer** and **cURL** on your system. Are you on a windows system? Use [Chocolatey](https://chocolatey.org)!
3. Install [Node.js](https://nodejs.org/en/)
4. Open your local `php.ini` and enable the following extensions:
     - curl
     - fileinfo
     - mbstring
     - openssl
     - pdo_mysql

## Setup

1. clone the repository: `git clone https://github.com/g41nxe/graphem-test.git`
2. run `docker-compose build && docker-compose up -d`
3. run `composer install` from the `src` directory
4. run `npm install` followed by `npm run dev` from the `src` directory
5. copy the `.env.example`-file and name it `.env` (in the `src` directory)
6. modify the `DB_HOST` entry in the `.env`-file to `DB_HOST=localhost`
7. run `php artisan migrate` from the `src` directory
8. switch back `DB_HOST` to `DB_HOST=mysql`
9. generate sample data using the Rest-API: `curl -X POST http://localhost:8080/api/pages`

## Running the App

Open up your browser of choice to [http://localhost:8080/example](http://localhost:8080/example) and you should see the app running as intended 
  