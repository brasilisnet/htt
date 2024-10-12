var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813866/random-pics-016.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813866_random-pics-016.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813867/random-pics-017.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813867_random-pics-017.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813868/random-pics-018.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813868_random-pics-018.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);