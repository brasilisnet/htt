var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814359/random-pics-358.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814359_random-pics-358.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814360/random-pics-359.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814360_random-pics-359.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814361/random-pics-360.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814361_random-pics-360.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);