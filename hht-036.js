var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814082/random-pics-106.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814082_random-pics-106.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814084/random-pics-107.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814084_random-pics-107.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814086/random-pics-108.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814086_random-pics-108.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);