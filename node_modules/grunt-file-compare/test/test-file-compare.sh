#!/bin/bash
./node_modules/.bin/grunt file_compare:foobar
if [ $? -ne 1 ]; then
  echo "Error: foobar file_compare should fail"
  exit 1
fi

./node_modules/.bin/grunt file_compare:foofoo
if [ $? -ne 0 ]; then
  echo "Error: foofoo file_compare should succeed"
  exit 1
fi
