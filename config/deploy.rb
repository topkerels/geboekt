require "capistrano/node-deploy"

set :application, "geboekt"
set :repository,  "git@github.com:Toinne/geboekt.git"
set :scm, :git
set :deploy_to, "/var/www/geboekt"

set :user, "root"

role :app, "hackdebib.wbdrp.be"

namespace :node do
    desc "Start the node application"
    task :start do
      sudo "forever start server.js"
    end

    desc "Stop the node application"
    task :stop do
      sudo "forever stop server.js"
    end

    desc "Restart the node application"
    task :restart do
      sudo "stop #{upstart_job_name}; true"
      sudo "start #{upstart_job_name}"
    end
end