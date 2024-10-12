var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814088/random-pics-109.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814088_random-pics-109.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814090/random-pics-110.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814090_random-pics-110.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814092/random-pics-111.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814092_random-pics-111.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);