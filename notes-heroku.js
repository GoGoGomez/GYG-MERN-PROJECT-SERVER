heroku create

git add .add
git commit -m 'deploying app'
git push heroku master


heroku keys:add
heroku keys:remove

ssh -v git@heroku.com

ENV