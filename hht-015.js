var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813893/random-pics-043.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813893_random-pics-043.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813894/random-pics-044.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813894_random-pics-044.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813895/random-pics-045.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813895_random-pics-045.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);