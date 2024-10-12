var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814187/random-pics-187.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814187_random-pics-187.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814188/random-pics-188.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814188_random-pics-188.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814189/random-pics-189.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814189_random-pics-189.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);