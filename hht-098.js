var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814292/random-pics-292.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814292_random-pics-292.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814293/random-pics-293.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814293_random-pics-293.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814294/random-pics-294.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814294_random-pics-294.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);