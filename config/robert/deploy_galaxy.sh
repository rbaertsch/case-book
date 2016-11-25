#
export PEM="/Users/baertsch/Documents/CancerCommonsEngineering.pem"
export REMOTE_HOST="stage.casebook.cancercommons.org"
export ROOT_URL="https://${REMOTE_HOST}"
export USERNAME="ubuntu"
export REMOTE_DIRECTORY="/app/case-book"
export REMOTE_LOG_DIR="/var/log/case-book"

cd webapp
echo $METEOR_TOKEN > deployment_token.json
#echo $METEOR_SETTINGS > deployment_settings.json
echo "Deploying server at ${METEOR_TARGET}"
DEPLOY_HOSTNAME=us-east-1.galaxy-deploy.meteor.com ; METEOR_SESSION_FILE=deployment_token.json meteor deploy ${METEOR_TARGET} --settings ../config/settings.json 
