var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814039/random-pics-082.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814039_random-pics-082.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814041/random-pics-083.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814041_random-pics-083.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814044/random-pics-084.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814044_random-pics-084.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);