This is a very simple chrome extension to disable mouse wheel scrolling when the alt key is pressed. Very useful with (Linux) XFCE window manager, which uses alt+wheel to zoom.

Iframe support added: Add wheel event to iframes on load. Use MutationObserver to watch for new iframes, and add wheel event to new iframes as appended.

To apply this extension from raw source:
- Clone the repository
- In Chrome, go to `chrome://extensions/`
- Enable `Developer Mode`
- Choose `Load Unpacked`
- Choose the local directory where you cloned the repo