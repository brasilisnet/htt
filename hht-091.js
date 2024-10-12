var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814271/random-pics-271.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814271_random-pics-271.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814272/random-pics-272.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814272_random-pics-272.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814273/random-pics-273.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814273_random-pics-273.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);