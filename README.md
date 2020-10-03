# Adtel_CMS

COURSE MANAGEMENT APP FOR ADTELLIGENT

------------------------------
DEV REQUIREMENTS
------------------------------
-Node.js-
https://nodejs.org/en/download/

-Postgres-
https://www.postgresql.org/download/

-Install Sequelize-
npm i sequelize

-Sequelize--postgres-
npm i pg pg-hstore

-Install Sequelize CLI-
npm install --save-dev sequelize-cli

------------------------------
SETUP - DEV
------------------------------
-create pg database (psql shell)-
create database adtell_course_mgnt

-run migrations (node.js shell)-
sequelize db:migrate

-start app in dev mode-
npm run dev

-start app in production mode-
npm run start
