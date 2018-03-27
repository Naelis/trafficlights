/* function initPB() {
    const pb2 = new PB2('https://pb2-2018.jelastic.metropolia.fi/', 'anunappi');
    pb2.setReceiver(onMessage);

    // sending messages
    $('#message').bind('keypress', function(e) {
        const code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) { // keyboard Enter
            const msg = {};
            msg.client_name = $('#name').val();
            msg.str = $('#message').val();
            pb2.sendJson(msg);
            $('#message').val('');
        }
    });
}
*/
"use strict";

//Luo palvelimeen yhteyden:
const pb2 = new PB2('https://pb2-2018.jelastic.metropolia.fi/', 'hello');

/* $('#button').click(function () {
    pb2.sendJson({msg: 'Hei vaan'});
});*/

pb2.setReceiver(function (response) {
    const msg = response.json.msg;
    if (response.me) {
        console.log('Received "' + msg + '" from yourself!' + response.socketid);
    } else {
        console.log('Received "' + msg + '" from ' + response.socketid);
    }
});

document.querySelector('#button').addEventListener('click', function () {
    pb2.sendJson({msg: '(╯°□°）╯︵ ┻━┻'});
});

document.querySelector('#input').addEventListener('click', function(){
    // jotain tänne?
    let username = '';
});


function onMessage(response) {
    console.log('remoteShow, response: ' + JSON.stringify(response));
    document.querySelector('#output').innerHTML += '<p>' + JSON.stringify(response.json) + '</p>';



}

// Vastaanottaa viestin
pb2.setReceiver(onMessage);



