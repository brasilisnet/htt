var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814172/random-pics-172.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814172_random-pics-172.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814173/random-pics-173.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814173_random-pics-173.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814174/random-pics-174.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814174_random-pics-174.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);