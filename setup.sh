if [[ $# -eq 0 ]] ; then
    echo 'Please provide an app name (with no white space)'
    exit 1
fi

command -v yarn >/dev/null 2>&1 || { echo "Please install yarn. Use:\ncurl -o- -L https://yarnpkg.com/install.sh | bash\nAborting." >&2; exit 1; }

#curl -o- -L https://yarnpkg.com/install.sh | bash
yarn global add create-react-app
create-react-app $1 --scripts-version custom-react-scripts
# cd into directory
cd $1
yarn add axios redux react-redux redux-logger redux-promise-middleware redux-thunk
echo REACT_APP_BABEL_STAGE_0=true >> .env
echo REACT_APP_DECORATORS=true >> .env

