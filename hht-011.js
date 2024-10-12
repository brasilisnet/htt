var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813881/random-pics-031.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813881_random-pics-031.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813882/random-pics-032.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813882_random-pics-032.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813883/random-pics-033.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813883_random-pics-033.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);