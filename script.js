setTimeout(() => {
    let count = 10;
    let timer = document.getElementById("timer");
    timer.innerText = count;
    setTimeout(() => {
        count--;
        timer.innerText = count;
        setTimeout(() => {
            count--;
            timer.innerText = count;
            setTimeout(() => {
                count--;
                timer.innerText = count;
                setTimeout(() => {
                    count--;
                    timer.innerText = count;
                    setTimeout(() => {
                        count--;
                        timer.innerText = count;
                        setTimeout(() => {
                            count--;
                            timer.innerText = count;
                            setTimeout(() => {
                                count--;
                                timer.innerText = count;
                                setTimeout(() => {
                                    count--;
                                    timer.innerText = count;
                                    setTimeout(() => {
                                        count--;
                                        timer.innerText = count;
                                        setTimeout(() => {
                                            timer.innerText = "Happy New Year";

                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
