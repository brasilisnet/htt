var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813851/random-pics-001.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813851_random-pics-001.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813852/random-pics-002.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813852_random-pics-002.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813853/random-pics-003.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813853_random-pics-003.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);