
# alt:V Selection Wheel

With this resource you can create a selection wheel that can call server and client events when its items are clicked. 

![](https://i.imgur.com/c7HbVox.gif)

## 💻  Installation

- Unzip the folder in the `resources` folder of your alt:V server
- Add `selection-wheel` to the resource.cfg of your gamemode under deps
- Call the selection wheel with `alt.clientEmit(player, 'wheelnav-open', [objectsArray]);`
	### Object structure:
	*This is the structure for one object, you can parse as many objects as you want.*
	```
	{ 
		title: string of displayed item, 
		image: path to the img file (optional),
		event: { 
			name: name of the event to call, 
			type: client or server event, 
			params: the params for the event to call 
		} 
	}
	```
	### Examples
	#### Wheel with Text
	```javascript
	alt.emitClient(player, 'wheelnav:open', [ { title: 'Hide Radar', event: { name: 'hideRadar', type: 'client', params: '' } }, { title: 'Show Radar', event: { name: 'showRadar', type: 'client', params: '' } } ]);
	```
	#### Wheel with Font Awesome Icons & Text
	```javascript
	alt.emitClient(player, 'wheelnav:open', [ { title: '\uf085\n Hide Radar', event: { name: 'hideRadar', type: 'client', params: '' } }, { title: '\uf085\n Show Radar', event: { name: 'showRadar', type: 'client', params: '' } } ]);
	```
	#### Wheel with Images (works best with .svg and .png)
	```javascript
	alt.emitClient(player, 'wheelnav:open', [ { title: 'Hide Radar', image: "/img/hide.svg" event: { name: 'hideRadar', type: 'client', params: '' } }, { title: 'Show Radar', image: "/img/show.svg" event: { name: 'showRadar', type: 'client', params: '' } } ]);
	```
