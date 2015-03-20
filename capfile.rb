require "capistrano/node-deploy"

set :application, "geboekt"
set :repository,  "git@github.com:Toinne/geboekt.git"
set :user, "root"
set :scm, :git
set :deploy_to, "/var/www/geboekt"

role :app, "hackdebib.wbdrp.be/