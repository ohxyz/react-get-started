#!/bin/sh

if [ $# -eq 0 ]
then
  echo "[Error] Please provide a project name!"
  exit 1
fi

if [ -d $1 ] 
then
  echo "[Error] Directory $1 exists!" 
  exit 1
fi
    
echo "[Step] Create project directory..."
mkdir $1

echo "[Step] Copy files to $1..."
curl https://codeload.github.com/ohxyz/react-get-started/zip/master \
  | tar -xf - -C $1 --strip-components=2 react-get-started-master/src

cd $1

echo "[Step] Install node packages..."
npm i

echo "[Finish] Start development."
npm run dev
