var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814106/random-pics-118.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814106_random-pics-118.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814108/random-pics-119.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814108_random-pics-119.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814110/random-pics-120.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814110_random-pics-120.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);