var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813863/random-pics-013.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813863_random-pics-013.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813864/random-pics-014.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813864_random-pics-014.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813865/random-pics-015.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813865_random-pics-015.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);