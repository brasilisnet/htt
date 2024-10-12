var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814190/random-pics-190.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814190_random-pics-190.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814191/random-pics-191.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814191_random-pics-191.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814192/random-pics-192.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814192_random-pics-192.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);