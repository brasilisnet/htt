var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813896/random-pics-046.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813896_random-pics-046.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813897/random-pics-047.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813897_random-pics-047.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813898/random-pics-048.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813898_random-pics-048.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);