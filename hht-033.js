var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814066/random-pics-097.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814066_random-pics-097.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814068/random-pics-098.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814068_random-pics-098.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814070/random-pics-099.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814070_random-pics-099.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);