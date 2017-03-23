document.addEventListener("DOMContentLoaded", ()=> {

  // create scene
  let scene = new THREE.Scene()
  // set viewpoint in relation to the window size
  let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
  // camera zoom
  camera.position.z = 5
  // invoke WebGLRenderer; set size
  let renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  // set tetrahedron1, purple
  let mesh1 = new THREE.Object3D();
			mesh1.add( new THREE.LineSegments(
				new THREE.TetrahedronGeometry(1.9),
        // lines to help discern the edges
				new THREE.LineBasicMaterial({
          // hex colors
					color: 0xffffff,
					transparent: true,
					opacity: 0.5
				})
			))
      // opaque inner tetrahedron
			mesh1.add( new THREE.Mesh(
				new THREE.TetrahedronGeometry(1.9),
				new THREE.MeshPhongMaterial({
          color: 0x94FF9B,
					emissive: 0x46A7FF,
					side: THREE.DoubleSide,
          // default is SmoothShading, which makes it "metallic". Light reflections are stronger
					shading: THREE.FlatShading
				})
			))
      // outer transparent tetrahedron
      mesh1.add( new THREE.Mesh(
        new THREE.TetrahedronGeometry(2),
        new THREE.MeshPhongMaterial({
          color: 0xff00ff,
					transparent: true,
					opacity: 0.5
        })
      ))

  // set tetrahedron 2, cyan
  let mesh2 = new THREE.Object3D();
      mesh2.add( new THREE.LineSegments(
        new THREE.TetrahedronGeometry(2.1),
        new THREE.LineBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.4
        })
      ))
      // inner opaque tetrahedron
      mesh2.add( new THREE.Mesh(
        new THREE.TetrahedronGeometry(2.1),
        new THREE.MeshPhongMaterial({
          color: 0xF7FFCA,
          emissive: 0x46A7FF,
          side: THREE.DoubleSide,
          shading: THREE.FlatShading
        })
      ))
      // outer transparent tetrahedron
      mesh2.add( new THREE.Mesh(
        new THREE.TetrahedronGeometry(2.2),
        new THREE.MeshPhongMaterial({
          color: 0x00ffff,
          transparent: true,
          opacity: 0.5
        })
      ))

  // create tetrahedrons on the page
  scene.add(mesh1)
  scene.add(mesh2)

  // light sources: white light
  light1 = new THREE.PointLight(0xffffff, 1, 0)
  light2 = new THREE.PointLight(0xffffff, 1, 0)
  light3 = new THREE.PointLight(0xffffff, 1, 0)
  // light is positioned to the left, right and below the objects for 3d effect
  light1.position.set(0, 200, 0)
  light2.position.set(100, 200, 100)
  light3.position.set(-100, -200, -100)
  // create lights
  scene.add(light1)
  scene.add(light2)
  scene.add(light3)

  function render() {
    requestAnimationFrame(render)
    // animation for tetrahedron 1
    mesh1.rotation.x += 0.003;
		mesh1.rotation.y += 0.005;
    // animation for tetrahedron 2
    mesh2.rotation.x += -0.004;
    mesh2.rotation.y += -0.007;
    renderer.render(scene, camera)
  }
  // render all
  render()

})
