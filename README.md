# VR Wiki

Browse Wikipedia from VR. Built using A-Frame.

## Running the server

You will need to install [Browsh](https://www.brow.sh/) and [Caddy](https://caddyserver.com/). Browsh is used for proxying web pages, and Caddy is used to as the webserver. In the `Caddyfile` you will need to update to the server's hostname.

In run terminal run:

```
$ browsh --http-server-mode
```

And in another terminal run:

```
$ caddy
```
