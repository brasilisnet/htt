var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814268/random-pics-268.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814268_random-pics-268.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814269/random-pics-269.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814269_random-pics-269.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814270/random-pics-270.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814270_random-pics-270.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);