#! /bin/bash
NEW_KITE_WEB_APP_SDK=$(node -pe "require('./package.json').version")

if [[ $NEW_KITE_WEB_APP_SDK =~ ^[0-9,.]*$ ]]; then
    ORIGINAL_BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
    NEW_KITE_WEB_APP_SDK_COMMIT_HASH=$(git log -n 1 --pretty=format:"%H")
    NEW_KITE_WEB_APP_SDK_FILENAME="docs/$NEW_KITE_WEB_APP_SDK/README.md"

    git config --global user.email "chrisberry4545@googlemail.com"
    git config --global user.name "chrisberry4545"

    git stash clear
    git stash --include-untracked

    git checkout gh-pages || git checkout -b gh-pages
    git pull origin gh-pages

    PREVIOUS_KITE_WEB_APP_SDK_VER=$(npm show @kite-tech/web-app-sdk version)
    PREVIOUS_KITE_WEB_APP_SDK_COMMIT_HASH=$(git log -n 1 --pretty=format:"%H")
    NEW_KITE_WEB_APP_SDK_CHANGELOG="https://github.com/OceanLabs/kite-components/compare/$PREVIOUS_KITE_WEB_APP_SDK_COMMIT_HASH...$NEW_KITE_WEB_APP_SDK_COMMIT_HASH"

    node ./infra/scripts/update-docs-index.js $NEW_KITE_WEB_APP_SDK
    git merge -X ours $ORIGINAL_BRANCH_NAME --no-edit
    git stash pop
    npm run example-build:dist

    # Add changelog and version change info to README.md in the version folder
    echo "Writing to file: $NEW_KITE_WEB_APP_SDK_FILENAME"
    touch $NEW_KITE_WEB_APP_SDK_FILENAME
    echo "- Version: $NEW_KITE_WEB_APP_SDK" >> $NEW_KITE_WEB_APP_SDK_FILENAME
    echo "- Changelog: $NEW_KITE_WEB_APP_SDK_CHANGELOG" >> $NEW_KITE_WEB_APP_SDK_FILENAME
    echo "- Previous version: $PREVIOUS_KITE_WEB_APP_SDK_VER" >> $NEW_KITE_WEB_APP_SDK_FILENAME
    cat $NEW_KITE_WEB_APP_SDK_FILENAME

    # Push all the doc changes to the gh-pages branch
    git reset
    git add --verbose docs
    git commit --verbose -m "docs: updated to version $NEW_KITE_WEB_APP_SDK"
    git push --verbose origin gh-pages
    git checkout $ORIGINAL_BRANCH_NAME
 else
    echo "Tagged version. Skipping release to gh-pages..."
fi
