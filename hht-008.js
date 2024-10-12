var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813872/random-pics-022.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813872_random-pics-022.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813873/random-pics-023.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813873_random-pics-023.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813874/random-pics-024.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813874_random-pics-024.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);