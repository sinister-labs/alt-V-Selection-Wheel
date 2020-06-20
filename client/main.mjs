import * as alt from "alt";
import * as native from "natives";

let wheelnavOpen = false;
alt.onServer('wheelnav:open', (data) => {
    if(wheelnavOpen != true){
    let view = new alt.WebView('http://resource/client/public/index.html');
    view.on('CEFLoaded', (e) => {
        alt.setTimeout(() => {
            view.emit('createWheel', data);
            view.focus();
            alt.showCursor(true);
            wheelnavOpen = true;
            alt.everyTick(() => {
                if(wheelnavOpen) {
                    native.disableControlAction(0, 1, true);//Camera
                    native.disableControlAction(0, 2, true);//Camera

                    native.disableControlAction(0, 12, true);//Weapon
                    native.disableControlAction(0, 13, true);//Weapon
                    native.disableControlAction(0, 14, true);//Weapon
                    native.disableControlAction(0, 15, true);//Weapon
                    native.disableControlAction(0, 16, true);//Weapon
                    native.disableControlAction(0, 17, true);//Weapon

                    native.disableControlAction(0, 24, true);//Left Mouse
                    native.disableControlAction(0, 25, true);//Right Mouse

                    native.disableControlAction(0, 37, true);//TAB

                    native.disableControlAction(0, 157, true);//Weapon Taste: 1
                    native.disableControlAction(0, 158, true);//Weapon Taste: 2
                    native.disableControlAction(0, 160, true);//Weapon Taste: 3
                    native.disableControlAction(0, 164, true);//Weapon Taste: 4
                    native.disableControlAction(0, 165, true);//Weapon Taste: 5
                    native.disableControlAction(0, 159, true);//Weapon Taste: 6
                    native.disableControlAction(0, 161, true);//Weapon Taste: 7
                    native.disableControlAction(0, 162, true);//Weapon Taste: 8
                    native.disableControlAction(0, 163, true);//Weapon Taste: 9

                    native.disablePlayerFiring(alt.Player.local.scriptID, false);
                }
            });
            native.freezeEntityPosition(alt.Player.local.scriptID, true);
            view.on('destroy', (data) => {
                wheelnavOpen = false;
                view.destroy();
                alt.showCursor(false);
                native.freezeEntityPosition(alt.Player.local.scriptID, false);
            });
            view.on('emitEvent', (data) => {
                data = JSON.parse(decodeURIComponent(data));
                if (data.type === 'client') {
                    alt.emit(data.name, data.params);
                } else {
                    alt.emitServer(data.name, data.params);
                }
            });
        }, 500)
    });
    }
});
