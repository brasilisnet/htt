var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814202/random-pics-202.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814202_random-pics-202.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814203/random-pics-203.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814203_random-pics-203.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814204/random-pics-204.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814204_random-pics-204.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);