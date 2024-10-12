var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813869/random-pics-019.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813869_random-pics-019.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813870/random-pics-020.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813870_random-pics-020.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813871/random-pics-021.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813871_random-pics-021.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);