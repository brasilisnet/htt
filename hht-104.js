var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814310/random-pics-310.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814310_random-pics-310.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814311/random-pics-311.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814311_random-pics-311.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814312/random-pics-312.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814312_random-pics-312.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);