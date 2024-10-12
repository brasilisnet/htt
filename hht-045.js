var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814133/random-pics-133.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814133_random-pics-133.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814134/random-pics-134.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814134_random-pics-134.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814135/random-pics-135.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814135_random-pics-135.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);