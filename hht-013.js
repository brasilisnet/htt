var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813887/random-pics-037.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813887_random-pics-037.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813888/random-pics-038.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813888_random-pics-038.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813889/random-pics-039.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813889_random-pics-039.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);