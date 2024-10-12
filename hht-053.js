var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814157/random-pics-157.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814157_random-pics-157.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814158/random-pics-158.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814158_random-pics-158.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814159/random-pics-159.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814159_random-pics-159.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);