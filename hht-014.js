var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813890/random-pics-040.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813890_random-pics-040.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813891/random-pics-041.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813891_random-pics-041.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813892/random-pics-042.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813892_random-pics-042.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);