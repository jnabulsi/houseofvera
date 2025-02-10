#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <commit-message>"
  exit 1
fi

# Run the build command
npm run generate

# Copy the output to the docs directory
cp -r dist/* docs

# Stage the changes
git add .

# Commit the changes with the provided message
git commit -m "$1"

# Push the changes to the remote repository
git push -f origin master:tess

echo "Deployment successful!"
