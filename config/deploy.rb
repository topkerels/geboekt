require "capistrano/node-deploy"

set :application, "geboekt"
set :repository,  "git@github.com:Toinne/geboekt.git"
set :scm, :git
set :deploy_to, "/var/www/geboekt"

set :user, "root"

role :app, "geboekt.gent"