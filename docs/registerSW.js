if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/lt-rules/sw.js', { scope: '/lt-rules/' })})}