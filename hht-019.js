var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813908/random-pics-055.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813908_random-pics-055.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813910/random-pics-056.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813910_random-pics-056.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813911/random-pics-057.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813911_random-pics-057.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);