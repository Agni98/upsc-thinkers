"""Local server for the site, with caching turned off.

python -m http.server lets the browser cache index.html, so an edited page
keeps loading the old shell until you force-refresh. This sends no-store on
every response, which means a normal F5 always shows the current files.

    python serve.py            # then open http://localhost:8765
    python serve.py 9000       # a different port
"""
import socket
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, fmt, *args):          # keep the console readable
        if "200" not in (args[1] if len(args) > 1 else ""):
            super().log_message(fmt, *args)


class DualStackServer(ThreadingHTTPServer):
    """Listen on IPv6 and IPv4 at the same time.

    Binding IPv4 only breaks any client that resolves "localhost" to ::1 first.
    A browser retries on 127.0.0.1 and you never notice; a Cloudflare tunnel
    hangs on the dead IPv6 address until the edge gives up, which surfaces as
    an intermittent 522. Dual-stack means localhost works either way.
    """

    address_family = socket.AF_INET6
    request_queue_size = 64
    daemon_threads = True

    def server_bind(self):
        self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        return super().server_bind()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    root = Path(__file__).resolve().parent
    handler = partial(NoCacheHandler, directory=str(root))
    try:
        server, where = DualStackServer(("::", port), handler), "IPv6 + IPv4"
    except OSError:                                  # no IPv6 stack on this box
        server, where = ThreadingHTTPServer(("0.0.0.0", port), handler), "IPv4 only"
    print("Serving %s  (%s)\n  http://localhost:%d\n  Ctrl+C to stop" % (root, where, port))
    server.serve_forever()
