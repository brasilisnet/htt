var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814328/random-pics-328.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814328_random-pics-328.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814329/random-pics-329.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814329_random-pics-329.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814330/random-pics-330.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814330_random-pics-330.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);