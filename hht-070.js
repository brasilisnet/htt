var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814208/random-pics-208.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814208_random-pics-208.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814209/random-pics-209.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814209_random-pics-209.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814210/random-pics-210.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814210_random-pics-210.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);