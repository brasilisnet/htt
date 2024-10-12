var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813903/random-pics-052.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813903_random-pics-052.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813905/random-pics-053.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813905_random-pics-053.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813907/random-pics-054.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813907_random-pics-054.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);