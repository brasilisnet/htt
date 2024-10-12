var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814193/random-pics-193.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814193_random-pics-193.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814194/random-pics-194.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814194_random-pics-194.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814195/random-pics-195.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814195_random-pics-195.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);