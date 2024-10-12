var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814274/random-pics-274.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814274_random-pics-274.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814275/random-pics-275.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814275_random-pics-275.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814276/random-pics-276.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814276_random-pics-276.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);