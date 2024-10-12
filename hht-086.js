var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814256/random-pics-256.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814256_random-pics-256.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814257/random-pics-257.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814257_random-pics-257.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814258/random-pics-258.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814258_random-pics-258.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);