#!/bin/bash

cd ../core

npm run build

npm pack --pack-destination="../tegel-react-demo"

cd ../tegel-react-demo

mv "$(ls *.tgz | head -n 1)" scania-tegel.tgz

npm i

npm run build






