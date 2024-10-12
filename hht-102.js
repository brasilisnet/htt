var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814304/random-pics-304.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814304_random-pics-304.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814305/random-pics-305.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814305_random-pics-305.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814306/random-pics-306.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814306_random-pics-306.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);