#!/bin/sh
npm install -g @angular/cli
npm install
ng serve --host 0.0.0.0 --port 4200
while true; do sleep 1000; done
