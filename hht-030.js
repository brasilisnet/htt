var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814051/random-pics-088.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814051_random-pics-088.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814052/random-pics-089.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814052_random-pics-089.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814054/random-pics-090.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814054_random-pics-090.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);