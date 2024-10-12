var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814238/random-pics-238.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814238_random-pics-238.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814239/random-pics-239.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814239_random-pics-239.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814240/random-pics-240.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814240_random-pics-240.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);