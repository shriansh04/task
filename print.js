async function async_print() {
  for (let i = 1; i <= 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(i);
  }
}

function promise_print() {
  const PromiseOne = new Promise(function (resolve) {
    setTimeout(function () {
      console.log(5);
    }, 5000);
    resolve();
  })
    .then(function () {
      setTimeout(function () {
        console.log(4);
      }, 4000);
    })
    .then(function () {
      setTimeout(function () {
        console.log(3);
      }, 3000);
    })
    .then(function () {
      setTimeout(function () {
        console.log(2);
      }, 2000);
    })
    .then(function () {
      setTimeout(function () {
        console.log(1);
      }, 1000);
    });
}

function promise_print2() {
    const promiseOne =new Promise(function(resolve)
    {
        for(let i=1;i<6;i++)
        {
            setTimeout(function()
            {
                console.log(i);
            },(i-1)*1000);
        }
        resolve();
    });
}
