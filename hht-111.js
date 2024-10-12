var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814331/random-pics-331.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814331_random-pics-331.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814333/random-pics-332.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814333_random-pics-332.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814334/random-pics-333.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814334_random-pics-333.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);