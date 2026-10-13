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
  cv: "",

  // A photo of you (square crop works best). Leave "" to hide it.
  me: "",

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
        ["photos/boards/d2026/stack.jpg", "The 2026 boards laid out"],
        ["photos/boards/d2026/esc.jpg", "An ESC board with the underside glow"],
        ["photos/boards/d2026/float.jpg", "The float electronics"],
        ["photos/boards/d2026/depth.jpg", "The depth sensor on the competition pool floor"],
    ]},
  ],

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
      ["photos/rov/acps-clean.jpg", "The active pressure compensation board"],
      ["photos/rov/acps-1.jpg", "The board live, with its pressure readout and status display"],
      ["photos/rov/acps-pneumatic.jpg", "The pneumatic schematic: fill and release valves around the canister"],
      ["photos/rov/acps-2.jpg", "The board under test"],
    ],
    agv: [
      // ["photos/agv/chassis.jpg", "AGV chassis with both lidars mounted"],
    ],
    nav2: [
      // ["photos/nav2/map.jpg", "Live Cartographer map in RViz"],
    ],
    nissan: [
      // ["photos/nissan/agv-line.jpg", "The AGV on the line at Nissan"],
    ],
    leoni: [
      // ["photos/leoni/dashboard.jpg", "KOSU dashboard filtered by shift"],
    ],
    siemens: [
      // ["photos/siemens/hmi.jpg", "HMI screen running my conveyor visualiser"],
    ],
    drone: [
      // ["photos/drone/frame.jpg", "Laser-cut acrylic frame, 225 mm"],
    ],
    printers: [
      // ["photos/printers/corexy.jpg", "CoreXY with the 5-lane multi-material unit"],
    ],
    spitfire: [
      // ["photos/spitfire/airframes.jpg", "Spitfire airframes across iterations"],
    ],
    cnc: [
      // ["photos/cnc/apollo.jpg", "APOLLO milling a PCB"],
    ],
    ev: [
      // ["photos/ev/harness.jpg", "Low-voltage wiring harness"],
    ]
  }
};
