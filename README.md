## andrewcombs13
This is my personal website. See it at [andrewcombs13.com](andrewcombs13.com)

Currently, the default branch is `html`. This branch is deployed directly to github pages with no processing, as everything in it is already static html. This is pretty neat, and easy, and very secure, and best of all: Free!

In the past, the site was mostly PHP and was hosted on an AWS EC2 server running a LAMP stack. But I just want a website, not infrastructure to maintain, so I moved it. I left the old `master` branch hanging around unchanged in case I ever want it for some reason. I don't though. The `dev` branch is also from those days, and was hosted on the same server at a different path for testing.

It's actually pretty cool how that worked. There was a php script on the server that, when loaded, would run a bunch of `exec` commands to call git functions to pull the latest commit. Then Github was set up with a webhook to call that PHP page any time a new commit was made. That way the website auto-deployed. Very simple and easy method of continuous deployment. And all it takes is a PHP file full of `exec`s. I'm so glad I have Github pages now.