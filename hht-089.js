var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814265/random-pics-265.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814265_random-pics-265.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814266/random-pics-266.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814266_random-pics-266.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814267/random-pics-267.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814267_random-pics-267.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);