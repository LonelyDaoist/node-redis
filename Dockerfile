from node:alpine
label author="Ghassen Ghabarou <ghabaroughassen@gmail.com>"

workdir /usr/app

copy package*.json ./
run npm install
copy . .

cmd node index.js
