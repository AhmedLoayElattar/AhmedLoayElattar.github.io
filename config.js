/*
  ------------------------------------------------------------
  YOUR PHOTOS AND CV LIVE HERE. This is the only file you edit.
  ------------------------------------------------------------

  How to add a photo:
    1. Upload the image into the matching folder on GitHub,
       for example  photos/rov/pool-test.jpg
    2. Add one line to that project's list below:
         ["photos/rov/pool-test.jpg", "Pool test before the 2026 competition"],
       The first part is the file path, the second is the caption.
    3. Commit. The site updates in about a minute.

  The FIRST photo in each list becomes the cover on the project tile.
  The rest show up in the gallery when someone opens the project.

  Tips:
    - JPG, around 1600 px wide, under 500 KB each loads fast.
    - Landscape photos make the best covers.
    - File names: lowercase, no spaces (pool-test.jpg, not Pool Test.JPG).
    - Open the site with  #photos  at the end of the address to see
      every photo slot and the folder it expects.
*/

window.SITE = {

  // Your CV as a PDF, for example "cv/Ahmed-Loay-Elattar-CV.pdf".
  // Leave empty ("") to hide the Download CV button.
  cv: "cv/ahmed-loay-elattar-cv.pdf",

  // A photo of you (square crop works best). Leave "" to hide it.
  me: "photos/me.jpg",

  // Your Instagram profile link for the printed-parts button, for example
  // "https://instagram.com/yourhandle". While empty, the button emails you instead.
  instagram: "",

  // The "Five generations of ROV boards" section. One image per board,
  // IN ORDER: 2023, May 2024, Oct 2024, 2025, 2026. Use "" to skip one.
  boards: [
    ["photos/boards/2023.webp", "2023: bare-copper carrier for an Arduino Mega and Uno"],
    ["photos/boards/2024-may.webp", "May 2024: the first soldermask boards"],
    ["photos/boards/2024-oct.webp", "October 2024: controller, power and IMU split apart"],
    ["photos/boards/2025.webp", "2025: the KAMIKAZE Pi 5 carrier, one board per ESC"],
    ["photos/boards/2026.webp", "2026: the cable-free SMD stack"],
  ],

  // Gallery and detail that open when a board card is clicked, in the
  // same order as `boards` above. photos are real close-ups of that generation.
  boardDetail: [
    { photos: [
        ["photos/boards/d2023/copper.jpg", "The bare-copper board, etched locally with no soldermask"],
        ["photos/boards/d2023/carrier.jpg", "An Arduino Mega and Uno carried on the board"],
        ["photos/boards/d2023/stack.jpg", "An early assembly, dev boards stacked together"],
    ]},
    { photos: [
        ["photos/boards/dmay2024/compare.jpg", "The float board: 2023 bare copper next to the 2024 soldermask version"],
        ["photos/boards/dmay2024/stack.jpg", "The first custom soldermask stack"],
        ["photos/boards/dmay2024/wiring.jpg", "Every microcontroller still ran its own USB cable"],
        ["photos/boards/dmay2024/working.jpg", "Bringing the boards up on the bench"],
    ]},
    { photos: [
        ["photos/boards/doct2024/boards.jpg", "The control and power boards, lit up"],
        ["photos/boards/doct2024/control.jpg", "The STM32F411 control board"],
        ["photos/boards/doct2024/imu.jpg", "The standalone IMU breakout"],
        ["photos/boards/doct2024/depth.jpg", "A sealed depth sensor"],
    ]},
    { photos: [
        ["photos/boards/d2025/stack.jpg", "The KAMIKAZE stack, lit from within"],
        ["photos/boards/d2025/control.jpg", "The control board: Pi 5 carrier, STM32 gateway and CAN on one PCB"],
        ["photos/boards/d2025/power.jpg", "The power board with one PCB per ESC"],
        ["photos/boards/d2025/award.jpg", "Best Communication System, MATE ROV Egypt 2025"],
    ]},
    { photos: [
        ["photos/boards/d2026/stack-top.jpg", "The 2026 stack from above, every board lit and running"],
        ["photos/boards/d2026/stack-side.jpg", "The stack from the side: Pi 5 carrier on top, power below"],
        ["photos/boards/d2026/stack-pi.jpg", "The Pi 5 carrier and gateway layer up close"],
        ["photos/boards/d2026/stack-power.jpg", "The power layer, one ESC board per thruster"],
        ["photos/boards/d2026/stack.jpg", "The 2026 boards laid out"],
        ["photos/boards/d2026/esc.jpg", "An ESC board with the underside glow"],
        ["photos/boards/d2026/acps.jpg", "The active pressure compensation board, live"],
        ["photos/boards/d2026/float-a.jpg", "The float electronics at an angle, with the radio antenna"],
        ["photos/boards/d2026/float-b.jpg", "A float relay and power stage up close"],
        ["photos/boards/d2026/float.jpg", "The float board from above: power conversion, STM32 and radio"],
        ["photos/boards/d2026/depth.jpg", "The depth sensor on the competition pool floor"],
    ]},
  ],

  // ROV subsystems. Each opens its own detail sheet from inside the ROV story.
  // `photos` names a gallery key under `photos` below.
  subsystems: {
    acps: {
      title: "Active pressure compensation",
      org: "ROV subsystem · my system",
      photos: "acps",
      links: [["Fuzzy logic report", "#"]],
      html:
        "<p>Underwater, external pressure climbs about one atmosphere every ten metres; at a hundred metres a sealed canister holds back roughly ten atmospheres, enough to deform it or fail a seal. This system keeps the canister's internal pressure tracking the water outside, so the enclosure is never fighting that difference.</p>" +
        "<p><b>The idea and the whole architecture were mine.</b> I designed it, modelled it and ran its tests in LabVIEW before it was built; Omar Hossam built the PCB.</p>" +
        "<h4>How it works</h4>" +
        "<p>The gas dynamics are nonlinear and the disturbances, a slow leak or a sudden depth change, are unpredictable, so instead of a precise model I used a <b>fuzzy logic controller</b> built from expert rules on the pressure error. Two custom in-house MS5837 sensors, one inside the canister and one outside, each on its own I2C bus for noise immunity, feed the error. The controller drives two solenoid valves, Fill and Release, to raise or bleed pressure. The pneumatic layout is in the diagram above.</p>" +
        "<p>An <b>STM32F401</b> runs the real-time sensing and valve control; a <b>LabVIEW</b> front panel over the VISA protocol supervises it, showing the live pressure difference, the fuzzy output and the valve direction. I chose the STM32F401 over an Arduino Uno deliberately: its hardware floating-point unit and multiple independent I2C buses make the fuzzy maths and the two-sensor setup fast and clean, which the Uno cannot do.</p>" +
        "<table class='spec'>" +
        "<tr><th>Controller</th><td>Fuzzy logic, expert rules on pressure error</td></tr>" +
        "<tr><th>Compute</th><td>STM32F401, ARM Cortex-M4 with FPU</td></tr>" +
        "<tr><th>Sensing</th><td>2× custom MS5837, inside and outside, separate I2C buses</td></tr>" +
        "<tr><th>Actuation</th><td>Two solenoid valves, Fill and Release</td></tr>" +
        "<tr><th>Interface</th><td>LabVIEW over VISA, live supervision</td></tr>" +
        "<tr><th>My role</th><td>System idea, architecture, modelling and LabVIEW testing</td></tr>" +
        "</table>"
    },
    ota: {
      title: "Over-the-air firmware updates",
      org: "ROV subsystem",
      photos: "rov",
      html:
        "<p>Opening the sealed hull to reflash a board costs time and risks a leak, so new firmware goes to any board without opening anything. A GUI on the station PC picks the target and the method, over the network or USB on the bench.</p>" +
        "<p>For an over-the-air update the station PC sends the .bin to the STM32 gateway as TCP packets with a 12-byte header (node ID, size, CRC-32), on the same link as the gateway's micro-ROS traffic. The gateway stages it in SPI flash, then flashes the target over CAN through a bootloader state machine: IDLE, AWAIT_BOOT, ERASING, RECEIVING, VERIFY, SUCCESS. CRC-32 is checked on both the host and the target, and the gateway can update itself. The live replay of this is on the home page.</p>"
    },
    motion: {
      title: "6-DoF motion control",
      org: "ROV subsystem",
      photos: "rov",
      html:
        "<p>Any six-degree-of-freedom command is split across seven T200 thrusters through a 6×7 allocation matrix solved by pseudo-inverse, <code>u = A⁺w</code>. Closed-loop PID runs on all six axes from a BNO055 IMU at 50 Hz and an MS5837 depth sensor, with a relay-based autotuner that finds the gains. The pilot gets stable, precise control at any depth.</p>"
    },
    can: {
      title: "CAN network and three-tier control",
      org: "ROV subsystem",
      photos: "rov",
      html:
        "<p>A Raspberry Pi 5 runs ROS 2 Jazzy for pilot input, autonomy and logging. An STM32F411 gateway bridges it over Ethernet with micro-ROS. Distributed boards on a 1 Mbps CAN bus drive the thrusters, measure current and run pressure compensation, with priority-slot IDs from 0x000 to 0x5FF. By 2026 the CAN signals run through the metal standoffs that hold the stack, so there are no external cables inside the hull.</p>"
    }
  },

  photos: {
    rov: [
      ["photos/rov/rov-kamikaze-spec.jpg", "The KAMIKAZE control board on our spec sheet"],
      ["photos/rov/acps-clean.jpg", "The active pressure compensation board I designed the system around"],
      ["photos/rov/acps-1.jpg", "The ACPS board live, with its pressure readout and status display"],
      ["photos/rov/group-ejust.jpg", "The E-JUST Robotics Club team at E-JUST"],
      ["photos/rov/group-grass.jpg", "The team on competition weekend"],
    ],
    // Images for the active pressure compensation subsection inside the ROV story.
    acps: [
      ["photos/rov/acps-pneumatic.jpg", "The pneumatic system diagram: fill and release valves around the canister"],
      ["photos/rov/acps-clean.jpg", "The active pressure compensation board"],
      ["photos/rov/acps-1.jpg", "The board live, with its pressure readout and status display"],
      ["photos/rov/acps-2.jpg", "The board under test"],
    ],
    agv: [
      ["photos/agv/agv-2.jpg", "The digital twin: mission control, the simulated warehouse and the Nav2 map in RViz"],
      ["photos/agv/agv-1.jpg", "Motion study of the scissor-lift mechanism in SolidWorks"],
    ],
    nav2: [
      ["photos/nav2/nav2-robot.jpg", "The Pioneer 3-DX I brought back to life in ROS 2 for RoboCup@Home Egypt 2026"],
      ["photos/nav2/nav2-team.jpg", "With a teammate and the robot at the competition"],
      ["photos/nav2/nav2-cert.jpg", "RoboCup Egypt 2026 — AASTMT, New Alamein, April 2026"],
      ["photos/nav2/nav2-map.jpg", "The live SLAM map and planned path in RViz"],
      ["photos/nav2/nav2-build.jpg", "Bringing up the robot's electronics"],
      ["photos/nav2/nav2-rviz.jpg", "Testing the ZED stereo depth map on a person"],
    ],
    nissan: [
      ["photos/nissan/nissan-agv.jpg", "The AGV I built, on its stand at the plant"],
      ["photos/nissan/nissan-wheel.jpg", "A hoverboard hub motor with its laser-cut Nissan cover"],
      ["photos/nissan/nissan-panel.jpg", "The front inspection panel, with its screen and indicator lights"],
      ["photos/nissan/nissan-camera.jpg", "The camera mounted above the inspection panel"],
      ["photos/nissan/nissan-board.jpg", "The control electronics inside the vehicle, with the motor drivers below"],
      ["photos/nissan/nissan-control.jpg", "A hoverboard motor driver, rewired into the vehicle"],
      ["photos/nissan/nissan-pendant.jpg", "The operator pendant I made: a Nextion touchscreen in a laser-cut case"],
      ["photos/nissan/nissan-pendant-inside.jpg", "Inside the pendant: Arduino, Nextion display, joystick and NRF24 radio"],
      ["photos/nissan/nissan-front.jpg", "The front sensor array for line following, from the old configuration"],
      ["photos/nissan/nissan-cert.jpg", "Certificate of Recognition for developing the plant's first AGV, and the internship certificate"],
    ],
    leoni: [
      ["photos/leoni/leoni-dashboard.jpg", "The KOSU dashboard I built in Power BI, reproducing the paper form live"],
      ["photos/leoni/leoni-analytics.jpg", "The shift analytics view, filterable by date, line and shift"],
      ["photos/leoni/leoni-me.jpg", "At LEONI's Rising Stars internship"],
    ],
    siemens: [
      ["photos/siemens/siemens-rig.jpg", "The SIMATIC training rig: S7-1500, ET200SP I/O and a SINAMICS drive"],
      ["photos/siemens/siemens-hmi.jpg", "The HMI panel running next to my ladder program"],
      ["photos/siemens/siemens-ladder.jpg", "My conveyor program in TIA Portal"],
      ["photos/siemens/siemens-team.jpg", "At the Siemens digitalization training"],
    ],
    drone: [
      ["photos/drone/drone-top.jpg", "The 225 mm clear-acrylic frame I designed and laser-cut, lit up"],
      ["photos/drone/drone-award.jpg", "Second place at the UAVC Drone Challenge, ICMTC 2024"],
      ["photos/drone/drone-team.jpg", "The team with the drone at the Military Technical College"],
      ["photos/drone/drone-arena.jpg", "Flying inside the competition arena"],
      ["photos/drone/drone-bench.jpg", "On the bench with the SpeedyBee F7 and the radio"],
    ],
    printers: [
      ["photos/printers/printer-corexy.jpg", "The CoreXY printer I built, running Klipper"],
      ["photos/printers/printer-toolhead.jpg", "The modified StealthBurner toolhead"],
      ["photos/printers/printer-first-lit.jpg", "My first printer at night, with its LED strip on"],
      ["photos/printers/printer-first.jpg", "My first printer, a Cartesian build, mid-print"],
      ["photos/printers/printer-print.jpg", "A finished print off the bed"],
    ],
    spitfire: [
      ["photos/spitfire/spitfire-desk.jpg", "The airframe with its electronics on the bench"],
      ["photos/spitfire/spitfire-top.jpg", "A later Spitfire airframe, fully painted"],
      ["photos/spitfire/spitfire-tx.jpg", "The custom RC transmitter I built, with hall-effect gimbals"],
      ["photos/spitfire/spitfire-v2.jpg", "An earlier revision with the electronics exposed"],
      ["photos/spitfire/spitfire-camo2.jpg", "Top view of the camouflaged airframe"],
      ["photos/spitfire/spitfire-nose.jpg", "The nose and roundel, hand-painted"],
      ["photos/spitfire/spitfire-bombs.jpg", "3D-printed drop tanks for the airframe"],
      ["photos/spitfire/spitfire-jac.jpg", "At the project exhibition, where it placed second"],
    ],

    autopilot: [
      ["photos/autopilot/autopilot-night.jpg", "The ground station running: Nextion screen, HC-12 telemetry and electronics in a hard case"],
      ["photos/autopilot/autopilot-board.jpg", "The flight controller I built: ArduPilot on a Raspberry Pi Zero with a custom carrier board"],
      ["photos/autopilot/autopilot-hmi.jpg", "The custom Nextion ground-station HMI"],
      ["photos/autopilot/autopilot-station.jpg", "The ground station in its case"],
      ["photos/autopilot/autopilot-station2.jpg", "The ground station powered up"],
    ],
    stealth: [
      ["photos/stealth/stealth-build.jpg", "The airframe assembled, with its electronics and a laptop beside it"],
      ["photos/stealth/stealth-cad.jpg", "The 3D model and CorelDRAW part sheets, ready to cut and assemble"],
      ["photos/stealth/stealth-2d.jpg", "The 2D design sheets: landing gear, wood working, foam design and print layouts"],
      ["photos/stealth/stealth-wings.jpg", "The foam wing panels cut and laid out"],
      ["photos/stealth/stealth-plan.jpg", "The MQ-9 Reaper three-view plan the airframe was scaled from"],
    ],
    nexus: [
      ["photos/nexus/nexus-machine.jpg", "NEXUS: the 600 mm plywood-frame machine from the side"],
      ["photos/nexus/nexus-ejust-art.jpg", "The E-JUST logo, drawn by NEXUS"],
      ["photos/nexus/nexus-ejust.jpg", "From above, with its pen carriage over the paper"],
      ["photos/nexus/nexus-run.jpg", "The controller box, with Pause, Resume and Abort"],
      ["photos/nexus/art-01.jpg", "Plotting at night"],
      ["photos/nexus/art-02.jpg", "Cat drawings plotted in ink"],
      ["photos/nexus/art-03.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-04.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-05.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-06.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-07.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-08.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-09.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-10.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-11.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-12.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-13.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-14.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-15.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-16.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-17.jpg", "Line art drawn by NEXUS"],
      ["photos/nexus/art-18.jpg", "Line art drawn by NEXUS"],
    ],
    miniplotter: [
      ["photos/plotter/plotter-head.jpg", "The pen carriage on CNC Writer V1.0"],
      ["photos/plotter/plotter-0383.jpg", "CNC Writer V1.0, my first pen plotter"],
      ["photos/plotter/plotter-0385.jpg", "The pen carriage: a servo lifts the pen"],
      ["photos/plotter/plotter-0389.jpg", "Side view of the laser-cut wooden frame"],
      ["photos/plotter/plotter-0417.jpg", "The salvaged drive mechanism that moves the pen"],
      ["photos/plotter/plotter-0421.jpg", "Writing on paper"],
    ],
    ev: [
      ["photos/ev/ev-competition-front.jpg", "The car on competition day, seen from the front"],
      ["photos/ev/ev-rear.jpg", "The finished car from the rear"],
      ["photos/ev/ev-fender.jpg", "The body and front wheel arch up close"],
      ["photos/ev/ev-early-body.jpg", "An earlier stage: the body before its white finish"],
      ["photos/ev/ev-night.jpg", "Doors and bonnet open at night"],
      ["photos/ev/ev-electronics.jpg", "The rear compartment with the drive electronics"],
      ["photos/ev/ev-board.jpg", "Low-voltage control electronics I built for the car"],
    ],

    omnibot: [
      ["photos/omnibot/omni-marker-top.jpg", "Top view of the robot with its ArUco marker"],
      ["photos/omnibot/omni-track-1.jpg", "Tracking the robot's pose from an overhead camera"],
      ["photos/omnibot/omni-track-2.jpg", "Tracking with ArUco markers on the floor"],
      ["photos/omnibot/omni-sim.jpg", "The robot in simulation"],
      ["photos/omnibot/omni-model.jpg", "The 3D model with its omni wheels"],
      ["photos/omnibot/omni-parts.jpg", "Printed orange parts for the wheels"],
      ["photos/omnibot/omni-top.jpg", "The holonomic robot seen from the overhead camera, with its ArUco marker"],
      ["photos/omnibot/omni-hand.jpg", "The compact base: four omni wheels and the onboard electronics"],
      ["photos/omnibot/omni-marker.jpg", "The ArUco fiducial the off-board camera tracks for pose"],
      ["photos/omnibot/omni-floor.jpg", "Driving holonomically across the floor"],
    ]
  }
};
