var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814181/random-pics-181.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814181_random-pics-181.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814182/random-pics-182.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814182_random-pics-182.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814183/random-pics-183.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814183_random-pics-183.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);