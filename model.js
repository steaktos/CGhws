function buildHead(WW, HH, DD) {

	var geometry = new THREE.BufferGeometry();	
	var vertices = [];
	var indices = [];
	var uvs = [];

	////////////
	const ww = 1;
	const hh = 3;
    const SS = 14*ww;
    const TT = hh + 5*ww;
  
	var a = {u: 2*ww, v: hh+5*ww};
	var b = {u: 4*ww, v: hh+5*ww};
	var c = {u: 6*ww, v: hh+5*ww};
	var d = {u: 0, v: hh+3*ww};
	var e = {u: 2*ww, v: hh+3*ww};
	var f = {u: 4*ww, v: hh+3*ww};
	var g = {u: 6*ww, v: hh+3*ww};
	var h = {u: 8*ww, v: hh+3*ww};
    var i = {u: 0, v: hh+ww};
	var j = {u: 2*ww, v: hh+ww};
	var k = {u: 4*ww, v: hh+ww};
	var l = {u: 6*ww, v: hh+ww};
	var m = {u: 8*ww, v: hh+ww};

	// PZ
	vertices.push(-WW/2,HH/2,DD/2, -WW/2,-HH/2,DD/2, WW/2,-HH/2,DD/2, WW/2,HH/2,DD/2 ); // 0,3,2,1
	indices.push(0,1,2, 0,2,3);
	uvs.push (e.u/SS,e.v/TT, j.u/SS,j.v/TT, k.u/SS,k.v/TT, f.u/SS,f.v/TT); // e,j,k,f

	// PX
	vertices.push(WW/2,HH/2,DD/2, WW/2,-HH/2,DD/2, WW/2,-HH/2,-DD/2, WW/2,HH/2,-DD/2 ); // 1,2,6,5
	indices.push (4,5,6, 4,6,7); // [0,1,2, 0,2,3] + 4
	uvs.push (f.u/SS,f.v/TT, k.u/SS,k.v/TT, l.u/SS,l.v/TT, g.u/SS,g.v/TT); // f,k,l,g
	
	// NX
	vertices.push(-WW/2,HH/2,-DD/2, -WW/2,-HH/2,-DD/2, -WW/2,-HH/2,DD/2, -WW/2,HH/2,DD/2 ); // 4,7,3,0
	indices.push (8,9,10, 8,10,11); // [0,1,2, 0,2,3] + 8
	uvs.push (d.u/SS,d.v/TT, i.u/SS,i.v/TT, j.u/SS,j.v/TT, e.u/SS,e.v/TT); // d,i,j,e
	
	// NZ
	vertices.push(-WW/2,HH/2,-DD/2, -WW/2,-HH/2,-DD/2, WW/2,-HH/2,-DD/2, WW/2,HH/2,-DD/2 ); // 4,7,6,5
	indices.push (12,13,14, 12,14,15); // [0,1,2, 0,2,3] + 12
	uvs.push (g.u/SS,g.v/TT, l.u/SS,l.v/TT, m.u/SS,m.v/TT, h.u/SS,h.v/TT); // g,l,m,h
	
	// PY
	vertices.push(-WW/2,HH/2,-DD/2, -WW/2,HH/2,DD/2, WW/2,HH/2,DD/2, WW/2,HH/2,-DD/2 ); // 4,0,1,5
	indices.push (16,17,18, 16,18,19); // [0,1,2, 0,2,3] + 16
	uvs.push (a.u/SS,a.v/TT, e.u/SS,e.v/TT, f.u/SS,f.v/TT, b.u/SS,b.v/TT); // a,e,f,b
	
	// NY
	vertices.push(-WW/2,-HH/2,-DD/2, -WW/2,-HH/2,DD/2, WW/2,-HH/2,DD/2, WW/2,-HH/2,-DD/2 ); // 7,3,2,6
	indices.push (20,21,22, 20,22,23); // [0,1,2, 0,2,3] + 16
	uvs.push (b.u/SS,b.v/TT, f.u/SS,f.v/TT, g.u/SS,g.v/TT, c.u/SS,c.v/TT); // b,f,g,c

	geometry.setIndex(indices);   
	geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
	geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));	
	
	let head = new THREE.Mesh (geometry, new THREE.MeshBasicMaterial({map: texture, side:THREE.DoubleSide}));
	return head;
}

function buildBody(WW, HH, DD) {
 
	var geometry = new THREE.BufferGeometry();	
    var vertices = [];
    var indices = [];
	var uvs = [];

 　 let SS = 8.68;
  　let TT = 5.01;
  　var a = {u: 3.10, v:2.53};
  　var b = {u: 4.34, v:2.53};
  　var c = {u: 5.58, v:2.53};
  　var d = {u: 2.48, v:1.91};
  　var e = {u: 3.10, v:1.91};
  　var f = {u: 4.34, v:1.91};
  　var g = {u: 5.58, v:1.91};
  　var h = {u: 6.20, v:1.91};
  　var i = {u: 2.48, v:0};
  　var j = {u: 3.10, v:0};
  　var k = {u: 4.34, v:0};
  　var l = {u: 5.58, v:0};
  　var m = {u: 6.20, v:0};
    var x = {u: 5.58, v:1.91};

	// PZ
    vertices.push(-WW/2,HH/2,DD/2, -WW/2,-HH/2,DD/2, WW/2,-HH/2,DD/2, WW/2,HH/2,DD/2 ); // 0,3,2,1
    indices.push(0,1,2, 0,2,3);
	uvs.push (e.u/SS,e.v/TT, j.u/SS,j.v/TT, k.u/SS,k.v/TT, f.u/SS,f.v/TT); // e,j,k,f

	// PX
    vertices.push(WW/2,HH/2,DD/2, WW/2,-HH/2,DD/2, WW/2,-HH/2,-DD/2, WW/2,HH/2,-DD/2 ); // 1,2,6,5
    indices.push (4,5,6, 4,6,7); // [0,1,2, 0,2,3] + 4
    uvs.push (f.u/SS,f.v/TT, k.u/SS,k.v/TT, l.u/SS,l.v/TT, g.u/SS,g.v/TT); // f,k,l,g
	
	// NX
    vertices.push(-WW/2,HH/2,-DD/2, -WW/2,-HH/2,-DD/2, -WW/2,-HH/2,DD/2, -WW/2,HH/2,DD/2 ); // 4,7,3,0
    indices.push (8,9,10, 8,10,11); // [0,1,2, 0,2,3] + 8
	uvs.push (d.u/SS,d.v/TT, i.u/SS,i.v/TT, j.u/SS,j.v/TT, e.u/SS,e.v/TT); // d,i,j,e

	// NZ
	vertices.push(-WW/2,HH/2,-DD/2, -WW/2,-HH/2,-DD/2, WW/2,-HH/2,-DD/2, WW/2,HH/2,-DD/2 ); // 4,7,6,5
	indices.push(12,13,14, 12,14,15);
　　uvs.push (g.u/SS,g.v/TT, l.u/SS,l.v/TT, m.u/SS,m.v/TT, h.u/SS,h.v/TT); // g,l,m,h

	// PY
	vertices.push(-WW/2,HH/2,-DD/2, -WW/2,HH/2,DD/2, WW/2,HH/2,DD/2, WW/2,HH/2,-DD/2 ); // 4,0,1,5
	indices.push(16,17,18, 16,18,19);
　　uvs.push (a.u/SS,a.v/TT, e.u/SS,e.v/TT, f.u/SS,f.v/TT, b.u/SS,b.v/TT); // a,e,f,b

	// NY
	vertices.push(-WW/2,-HH/2,-DD/2, -WW/2,-HH/2,DD/2, WW/2,-HH/2,DD/2, WW/2,-HH/2,-DD/2 ); // 7,3,2,6
	indices.push(20,21,22, 20,22,23);
　　uvs.push (b.u/SS,b.v/TT, f.u/SS,f.v/TT, x.u/SS,x.v/TT, c.u/SS,c.v/TT); // b,f,x,c
 
    geometry.setIndex(indices);  
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));	
	
    let body = new THREE.Mesh (geometry, new THREE.MeshBasicMaterial({map: texture, side:THREE.DoubleSide}));
	return body;
}


function buildLeg(WW, HH, DD) {
 
	var geometry = new THREE.BufferGeometry();	
    var vertices = [];
    var indices = [];
	var uvs = [];

 　 let SS = 8.68;
  　let TT = 5.01;
  
  　var a = {u: 0.62, v:2.53};
  　var b = {u: 1.24, v:2.53};
  　var c = {u: 1.86, v:2.53};
  　var d = {u: 0, v:1.91};
  　var e = {u: 0.62, v:1.91};
  　var f = {u: 1.24, v:1.91};
  　var g = {u: 1.86, v:1.91};
  　var h = {u: 2.48, v:1.91};
  　var i = {u: 0, v:0};
  　var j = {u: 0.62, v:0};
  　var k = {u: 1.24, v:0};
  　var l = {u: 1.86, v:0};
  　var m = {u: 2.48, v:0};

	// PZ
	vertices.push(-WW/2,HH/2,DD/2, -WW/2,-HH/2,DD/2, WW/2,-HH/2,DD/2, WW/2,HH/2,DD/2 ); // 0,3,2,1
	indices.push(0,1,2, 0,2,3);
	uvs.push (e.u/SS,e.v/TT, j.u/SS,j.v/TT, k.u/SS,k.v/TT, f.u/SS,f.v/TT); // a,e,f,b

	// PX
    vertices.push(WW/2,HH/2,DD/2, WW/2,-HH/2,DD/2, WW/2,-HH/2,-DD/2, WW/2,HH/2,-DD/2 ); // 1,2,6,5
    indices.push (4,5,6, 4,6,7); // [0,1,2, 0,2,3] + 4
	uvs.push (f.u/SS,f.v/TT, k.u/SS,k.v/TT, l.u/SS,l.v/TT, g.u/SS,g.v/TT); // f,k,l,g
	
	// NX
    vertices.push(-WW/2,HH/2,-DD/2, -WW/2,-HH/2,-DD/2, -WW/2,-HH/2,DD/2, -WW/2,HH/2,DD/2 ); // 4,7,3,0
    indices.push (8,9,10, 8,10,11); // [0,1,2, 0,2,3] + 8
	uvs.push (d.u/SS,d.v/TT, i.u/SS,i.v/TT, j.u/SS,j.v/TT, e.u/SS,e.v/TT); // d,i,j,e

	// NZ
	vertices.push(-WW/2,HH/2,-DD/2, -WW/2,-HH/2,-DD/2, WW/2,-HH/2,-DD/2, WW/2,HH/2,-DD/2 ); // 4,7,6,5
	indices.push(12,13,14, 12,14,15);
　　uvs.push (g.u/SS,g.v/TT, l.u/SS,l.v/TT, m.u/SS,m.v/TT, h.u/SS,h.v/TT); // g,l,m,h

	// PY
	vertices.push(-WW/2,HH/2,-DD/2, -WW/2,HH/2,DD/2, WW/2,HH/2,DD/2, WW/2,HH/2,-DD/2 ); // 4,0,1,5
	indices.push(16,17,18, 16,18,19);
　　uvs.push (a.u/SS,a.v/TT, e.u/SS,e.v/TT, f.u/SS,f.v/TT, b.u/SS,b.v/TT); // a,e,f,b

	// NY
	vertices.push(-WW/2,-HH/2,-DD/2, -WW/2,-HH/2,DD/2, WW/2,-HH/2,DD/2, WW/2,-HH/2,-DD/2 ); // 7,3,2,6
	indices.push(20,21,22, 20,22,23);
　　uvs.push (b.u/SS,b.v/TT, f.u/SS,f.v/TT, g.u/SS,g.v/TT, c.u/SS,c.v/TT); // b,f,g,c
 
    geometry.setIndex(indices);  
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));	

	let leg = new THREE.Group();
    let mesh = new THREE.Mesh (geometry, new THREE.MeshBasicMaterial({map: texture, side:THREE.DoubleSide}));
	leg.add(mesh);
	mesh.position.y = -HH/2;
	return leg;
}

function buildHand(WW, HH, DD) {
 
	var geometry = new THREE.BufferGeometry();	
    var vertices = [];
    var indices = [];
	var uvs = [];

 　 let SS = 8.68;
  　let TT = 5.01;
		// 0.62   1.98		u+3.72+2.48
  　var a = {u: 6.82, v:2.53};
  　var b = {u: 7.44, v:2.53};
  　var c = {u: 8.06, v:2.53};
  　var d = {u: 6.2, v:1.91};
  　var e = {u: 6.82, v:1.91};
  　var f = {u: 7.44, v:1.91};
  　var g = {u: 8.06, v:1.91};
  　var h = {u: 8.68, v:1.91};
  　var i = {u: 6.2, v:0};
  　var j = {u: 6.82, v:0};
  　var k = {u: 7.44, v:0};
  　var l = {u: 8.06, v:0};
  　var m = {u: 8.68, v:0};

	// PZ
	vertices.push(-WW/2,HH/2,DD/2, -WW/2,-HH/2,DD/2, WW/2,-HH/2,DD/2, WW/2,HH/2,DD/2 ); // 0,3,2,1
	indices.push(0,1,2, 0,2,3);
	uvs.push (e.u/SS,e.v/TT, j.u/SS,j.v/TT, k.u/SS,k.v/TT, f.u/SS,f.v/TT); // a,e,f,b

	// PX
	vertices.push(WW/2,HH/2,DD/2, WW/2,-HH/2,DD/2, WW/2,-HH/2,-DD/2, WW/2,HH/2,-DD/2 ); // 1,2,6,5
	indices.push (4,5,6, 4,6,7); // [0,1,2, 0,2,3] + 4
	uvs.push (f.u/SS,f.v/TT, k.u/SS,k.v/TT, l.u/SS,l.v/TT, g.u/SS,g.v/TT); // f,k,l,g
	
	// NX
	vertices.push(-WW/2,HH/2,-DD/2, -WW/2,-HH/2,-DD/2, -WW/2,-HH/2,DD/2, -WW/2,HH/2,DD/2 ); // 4,7,3,0
	indices.push (8,9,10, 8,10,11); // [0,1,2, 0,2,3] + 8
	uvs.push (d.u/SS,d.v/TT, i.u/SS,i.v/TT, j.u/SS,j.v/TT, e.u/SS,e.v/TT); // d,i,j,e

	// NZ
	vertices.push(-WW/2,HH/2,-DD/2, -WW/2,-HH/2,-DD/2, WW/2,-HH/2,-DD/2, WW/2,HH/2,-DD/2 ); // 4,7,6,5
	indices.push(12,13,14, 12,14,15);
　　uvs.push (g.u/SS,g.v/TT, l.u/SS,l.v/TT, m.u/SS,m.v/TT, h.u/SS,h.v/TT); // g,l,m,h

	// PY
	vertices.push(-WW/2,HH/2,-DD/2, -WW/2,HH/2,DD/2, WW/2,HH/2,DD/2, WW/2,HH/2,-DD/2 ); // 4,0,1,5
	indices.push(16,17,18, 16,18,19);
　　uvs.push (a.u/SS,a.v/TT, e.u/SS,e.v/TT, f.u/SS,f.v/TT, b.u/SS,b.v/TT); // a,e,f,b

	// NY
	vertices.push(-WW/2,-HH/2,-DD/2, -WW/2,-HH/2,DD/2, WW/2,-HH/2,DD/2, WW/2,-HH/2,-DD/2 ); // 7,3,2,6
	indices.push(20,21,22, 20,22,23);
　　uvs.push (b.u/SS,b.v/TT, f.u/SS,f.v/TT, g.u/SS,g.v/TT, c.u/SS,c.v/TT); // b,f,g,c
 
    geometry.setIndex(indices);  
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
	
	let hand = new THREE.Group();
    let mesh = new THREE.Mesh (geometry, new THREE.MeshBasicMaterial({map: texture, side:THREE.DoubleSide}));
	hand.add(mesh);
	mesh.position.y = -HH/2;
	return hand;
}